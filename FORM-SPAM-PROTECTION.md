# Form spam protection

The contact, price inquiry, and job application endpoints require a server-verified
Cloudflare Turnstile token before sending email or storing a CV. Tokens must match
both the request hostname and the specific form action. Turnstile rejects expired
and reused tokens. Hidden honeypot fields silently discard basic bot submissions.

## Activate before deploying

1. In Cloudflare Dashboard, open **Turnstile** and add a **Managed** widget.
2. Allow `tjenervikar.dk` and `www.tjenervikar.dk` (plus any preview hostname you
   actually use for testing).
3. In **Workers & Pages → tjener-vikar → Settings → Variables and Secrets**, set:
   - `TURNSTILE_SITE_KEY`: the public widget site key.
   - `TURNSTILE_SECRET_KEY`: the widget secret, stored as a secret.
4. Set the keys in each environment you intend to use, then deploy this code.
   Existing Resend and R2 settings remain unchanged.
5. Submit each form once and verify its email and thank-you redirect. Verify the
   job application still delivers its CV. A direct POST without a Turnstile token
   must fail without sending email or storing a CV.

**Do not deploy without both keys.** Missing configuration or unavailable
verification fails closed, so unverified submissions cannot reach your inbox.
The browser displays a Danish error and suggests calling instead.
Only the public site key is exposed through `/api/form-config`.

Use Cloudflare's documented test keys only in local/preview environments, never
in production. This implementation also checks hostname and action, so unit tests
mock the verification response rather than bypassing those checks.

## Local checks

```sh
node --test tests/form-protection.test.mjs
node --check assets/form-protection.js
```

Turnstile reduces automated spam, but cannot guarantee blocking human spammers.
If abuse continues, consider a Cloudflare rate-limiting rule for POST requests to
the three form endpoints. Avoid aggressive limits that block customers sharing
an office network.
