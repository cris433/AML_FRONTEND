import { motion } from "framer-motion";
import { ShoppingCart, Trash2, ArrowRight, CreditCard, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const cartItems = [
  { id: 1, name: "AML-FL200 Flood Light", spec: "200W | IP67", price: 4500, qty: 2 },
  { id: 3, name: "AML-HC50 Heavy Clamp", spec: "50A | Marine Grade", price: 850, qty: 5 },
];

const Cart = () => {
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = 500;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <span className="tech-badge mb-4 inline-block">Checkout</span>
          <h1 className="text-3xl font-black md:text-4xl">
            Your <span className="text-gradient-indigo">Cart</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-3">
          {/* Items */}
          <div className="space-y-4 lg:col-span-2">
            {cartItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-md bg-secondary">
                    <ShoppingCart className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="font-mono text-xs text-muted-foreground">{item.spec}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-mono text-sm text-muted-foreground">×{item.qty}</span>
                  <span className="font-bold text-gradient-indigo">₹{(item.price * item.qty).toLocaleString()}</span>
                  <button className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-bold">Order Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center gap-1"><Truck className="h-3 w-3" /> Shipping</span>
                <span>₹{shipping.toLocaleString()}</span>
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex justify-between text-lg font-black">
                  <span>Total</span>
                  <span className="text-gradient-indigo">₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Stripe Placeholder */}
            <div className="mt-6 rounded-md border border-border bg-secondary p-4 text-center">
              <CreditCard className="mx-auto mb-2 h-6 w-6 text-muted-foreground" />
              <p className="font-mono text-xs text-muted-foreground">Stripe Payment Integration</p>
            </div>

            {/* ShipRocket Placeholder */}
            <div className="mt-3 rounded-md border border-border bg-secondary p-4 text-center">
              <Truck className="mx-auto mb-2 h-6 w-6 text-muted-foreground" />
              <p className="font-mono text-xs text-muted-foreground">ShipRocket Shipping Calculator</p>
            </div>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-bold text-accent-foreground glow-accent">
              Proceed to Checkout <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
