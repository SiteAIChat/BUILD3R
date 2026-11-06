---
title: "The roofer sent the certificate. Why is the office still asking?"
industry: "Property management"
summary: "A renewal arrives under a legal name. The vendor list uses a trade name. The next reminder is about to go out."
order: 5
companion: "apartment-move-in"
invitation: "Bring a vendor renewal that took several emails to sort out. We’ll look at where the document lost its owner."
---

The roofer is due Monday. His insurance agent emailed a renewal on Thursday under the contractor’s legal name. On Friday morning the property office is still preparing a reminder addressed to the trade name on its vendor list. From one desk the job looks finished. From the other it looks overdue.

An AI agent could read the named business and expiry date on the certificate, find the trade name on the vendor record, and put the document in front of the coordinator with the possible match highlighted. If two vendors share a similar name, it could leave that question open. The coordinator decides whether the document satisfies the property’s requirements. Monday’s crew gets one informed answer instead of a request to send the same PDF again.

## How we’d build it

We’d connect the vendor inbox to the coordinator’s roster. The agent could extract the named insured and policy dates, then show which vendor record matches and why. A manager could review the document against the property’s requirements. Once the coordinator records a decision, that decision governs the next reminder.

## What we’d test first

We’d test renewals from one property, including a vendor with several trading names and a certificate somebody sent twice. The test is whether staff can stop unnecessary reminders while still seeing every document that needs a real review.
