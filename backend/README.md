Your app will implement 3 models.

Provider
rails g model Provider name
---

id: int

---

OpportunitySource
rails g model OpportunitySource provider:references opportunity:references
---

provider_id: int,
opportunity_id: int,

---

Opportunity
rails g model opportunity public_id
---

public_id: str

---

Your app must have the following endpoints

/api/v1/opportunities

- returns list of opportunities
- able to filter by provider

OpportunitySource.create([
  {opportunity_id: 1, provider_id: 1},
  {opportunity_id: 2, provider_id: 2}
  ])