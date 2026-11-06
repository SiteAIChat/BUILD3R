---
title: "A customer orders twelve. Twelve cases or twelve pieces?"
industry: "Distribution"
summary: "An emailed purchase order is nearly ready to enter. One ambiguous unit could multiply the shipment."
order: 4
companion: "supplier-delay"
invitation: "Bring a purchase order that made your team stop and ask a question. We’ll see which lines could safely become a draft."
---

A distributor’s sales desk receives a three-page purchase order from a repeat customer. Eleven lines match familiar items. On the twelfth, the buyer writes “12 BX” next to a fitting the distributor stocks by the piece. Last month the customer bought individual fittings. Copying the number into the order system would be quick. It might also send the wrong quantity.

An agent could prepare the eleven clear lines, place the original wording beside the ambiguous line and show the last confirmed order. The rep has one question to put to the buyer before releasing the draft. To see whether this pays off, time a set of actual orders through human approval, including the time spent fixing any errors.

## How we’d build it

We’d start with one repeat buyer. The agent could extract each line from the PDF, keeping the customer’s wording beside the draft. A lookup against the current catalog would supply the internal part number and packing unit. If the catalog says “each” and the order says “box,” the system would leave the quantity unresolved until a rep confirms the conversion.

## What we’d test first

We’d compare the draft with orders that the desk entered and the buyer accepted. Count the minutes through final approval and check quantities, units and revisions. A fast draft that somebody has to recheck line by line buys very little.
