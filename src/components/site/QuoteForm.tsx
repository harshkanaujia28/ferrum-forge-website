import { useState } from "react";
import { Check } from "lucide-react";

const PRODUCTS = ["Aluminum Horse Shoes", "Steel Horse Shoes", "Racing Horse Shoes", "Farrier Tools", "Hoof Care", "Equine Accessories"];

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    product: PRODUCTS[0],
    qty: "5000",
    country: "",
    incoterm: "FOB Mumbai",
    name: "", company: "", email: "", phone: "", notes: "",
  });
  const [sent, setSent] = useState(false);

  function update<K extends keyof typeof data>(k: K, v: (typeof data)[K]) {
    setData((d) => ({ ...d, [k]: v }));
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-10 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display text-2xl">Inquiry received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our export desk will reply within 12 business hours with pricing, lead times and a pro-forma invoice.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span>Step {step} of 3</span>
        <span>{step === 1 ? "Product" : step === 2 ? "Logistics" : "Contact"}</span>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`h-0.5 rounded-full ${i <= step ? "bg-primary" : "bg-border"}`} />
        ))}
      </div>

      {step === 1 && (
        <div className="mt-6 grid gap-4">
          <Field label="Product Category">
            <select value={data.product} onChange={(e) => update("product", e.target.value)} className={inputCls}>
              {PRODUCTS.map((p) => <option key={p}>{p}</option>)}
            </select>
          </Field>
          <Field label="Estimated Quantity (units)">
            <input value={data.qty} onChange={(e) => update("qty", e.target.value)} className={inputCls} inputMode="numeric" />
          </Field>
          <Field label="Additional specs (optional)">
            <textarea value={data.notes} onChange={(e) => update("notes", e.target.value)} rows={3} className={inputCls} placeholder="Sizes, weight, customisations, packaging…" />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="mt-6 grid gap-4">
          <Field label="Destination Country">
            <input value={data.country} onChange={(e) => update("country", e.target.value)} className={inputCls} placeholder="e.g. United States" required />
          </Field>
          <Field label="Preferred Incoterm">
            <select value={data.incoterm} onChange={(e) => update("incoterm", e.target.value)} className={inputCls}>
              {["EXW Anand", "FOB Mumbai", "CIF (destination port)", "DDP (door delivery)"].map((p) => <option key={p}>{p}</option>)}
            </select>
          </Field>
        </div>
      )}

      {step === 3 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field label="Full Name"><input required value={data.name} onChange={(e) => update("name", e.target.value)} className={inputCls} /></Field>
          <Field label="Company"><input required value={data.company} onChange={(e) => update("company", e.target.value)} className={inputCls} /></Field>
          <Field label="Email"><input required type="email" value={data.email} onChange={(e) => update("email", e.target.value)} className={inputCls} /></Field>
          <Field label="Phone / WhatsApp"><input value={data.phone} onChange={(e) => update("phone", e.target.value)} className={inputCls} /></Field>
        </div>
      )}

      <div className="mt-7 flex items-center justify-between">
        <button type="button" onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1} className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30">
          ← Back
        </button>
        {step < 3 ? (
          <button type="button" onClick={() => setStep((s) => s + 1)} className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:brightness-110">
            Continue →
          </button>
        ) : (
          <button type="submit" className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:brightness-110">
            Submit Inquiry
          </button>
        )}
      </div>
    </form>
  );
}

const inputCls = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
