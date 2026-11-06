---
title: "The regular approver is away. Who can sign today?"
industry: "Office and finance"
summary: "An urgent scanner purchase lands with the person covering the inbox. Her spending authority ends at $5,000."
order: 6
companion: "invoice-approval"
invitation: "Bring a purchase that got stuck while someone was away. We’ll map the route it should have taken."
---

The office needs an $8,400 replacement scanner before a Monday shipment. Its usual approver is away. His out-of-office reply says to contact the office manager, so the request lands with her. She can cover routine purchases up to $5,000. The scanner has already spent half a day waiting for a signature she can’t give.

An agent could compare the amount and purchase category with the company’s current delegation rules, then route the request to the authorized director with the quote attached. If the delegation expired yesterday, it could flag that for purchasing. The director still makes the spending decision. The office manager gets her afternoon back without having to interpret someone else’s authority.

## How we’d build it

We’d read the quote and match the request to the current purchasing policy. The system would check the category, the amount, the effective dates and any named substitute. A forwarded email can help find the request. The company’s delegation record determines where it is allowed to go. When no rule covers the purchase, purchasing gets the question.

## What we’d test first

Start with past absences. Try a purchase inside the backup limit, one just over it, and one that arrived after the normal approver returned. Finance can verify the proposed recipient for each and see the rule behind it before the workflow starts routing live requests.
