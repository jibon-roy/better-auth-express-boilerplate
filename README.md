# better-auth-backend

---

- Error Logs: https://api.domian.com.bd/logs/errors
- Success Logs: https://api.domin.com.bd/logs/successes

- http://localhost:5000/api/auth/callback/google

---

- DATABASE_URL as supabase -> DIRECT_URL

---

- `node -e "const crypto = require('crypto'); console.log(crypto.randomBytes(64).toString('hex'));"`

---

- RESEND_API_KEY as EMAIL_SENDER_SMTP_PASS

---

# Project run

- `pnpm install`
- `pnpm dlx prisma generate`
  don't use `pnpm push` this is postgresql. Use migration when you confirm that everything ready.
- `pnpm dlx prisma migrate dev`
- for production: `pnpm dlx prisma migrate deploy`

### for check everything ok

- `pnpm lint`

### then build stage:

- `pnpm build`

### for dev:

- `pnpm dev`
