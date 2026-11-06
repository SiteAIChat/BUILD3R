---
title: "One shipment slips. Which customer needs a call?"
industry: "Distribution"
summary: "A late pallet, three open orders, and one Friday promise. Follow a supplier email to the salesperson who can still do something about it."
order: 1
companion: "purchase-order-entry"
invitation: "Think of the last time a supplier moved a date on you. Bring that example, and we’ll trace how your team figured out who needed a call."
---

It’s Thursday morning. A supplier emails your sales desk: “The pump seals due this afternoon missed the truck. New ETA Tuesday.”

Three customers have ordered that seal. Which one would you call first?

The first customer has eight seals on order for Friday. All eight are on the shelf with their name on them. The second needs six on Friday, and all six were supposed to come off today’s truck. The third needs ten by the end of next week. Tuesday still works for them, if the supplier keeps its revised date.

The second customer is the one you’d call. You might still save their Friday delivery if another branch has six seals to spare. The hard part is getting to that answer while there’s time to do something about it. The new date is in an email. The quantities are in your order system. The promise to the customer might be in a salesperson’s notes.

## How we’d build it

We’d start with the supplier inbox and one product line. An AI agent could read the email, identify the incoming purchase order, and pull out the item and revised arrival date. If the supplier just wrote “the seals” and there were two open shipments that fit, the agent would ask the buyer which one they meant. Guessing there could send a salesperson to the wrong customer.

Once the shipment is identified, the order system can do the arithmetic. We’d check each customer’s promised date against stock already set aside for that order and the stock still due to arrive. The sales rep would get a short note with the records behind it:

> Six pump seals on Friday’s order depend on the delayed shipment. The supplier now expects Tuesday. The other Friday order has stock reserved. Check the north branch for six available seals before calling the buyer.

The rep can open the supplier email and the affected order, confirm what the north branch can release, and decide what to offer. If the branch can spare four, she can ask the buyer whether four on Friday would keep their crew working. That conversation belongs with the person who knows the account.

## What we’d test first

For a pilot, we’d ask the order desk to pick a handful of past supplier delays, including one where existing stock covered every order. We’d replay each using the records available when the email arrived. Did the agent flag the orders that needed attention? Did it leave the covered orders alone? How long did it take a rep to verify the answer and act?

That last question matters. If the rep still has to open every order to trust the alert, we have more work to do. If she can go straight to the buyer whose Friday delivery is at risk, that’s a result worth testing on live orders.
