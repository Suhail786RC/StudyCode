/* StudyCode · ES2020 · no dependencies, requests, accounts or build step.
   Content is adapted from the two supplied master guides. Practice questions
   are original learning checks, not official papers or marking memoranda. */
"use strict";
(() => {
  // ---------- Content model: every topic in both supplied guides ----------
  const lesson = (id, title, marks, points, example, exam, question, answer) =>
    ({ id, title, marks, points, example, exam, question, answer });
  const LESSONS = {
    isst: [
      lesson("strategy", "Competitive strategy & digital transformation", 80, [
        "**IT** is hardware, software and networks. An **information system** combines technology, data, people and processes. IS strategy chooses the information capabilities needed to achieve organisational goals. The **strategy triangle** aligns business choices, organisational responsibilities and IS capabilities.",
        "A **mission** states present purpose; a **vision** describes a desired future. A **business model** explains value creation, delivery and capture. **Business strategy** explains where to compete and how to win. Retailers may share a margin-based business model while using different strategies.",
        "**Five Forces** analyses industry profitability: rivalry, potential entrants, substitutes, buyer power and supplier power. A substitute meets the same need differently; another comparable retailer is a rival. IS can improve differentiation, cost, supplier alternatives, integration and customer retention.",
        "**Cost leadership** requires lower-cost activities, not merely low prices. **Differentiation** creates distinctive value; **focus** serves a narrow segment through cost or differentiation. The **value chain** links inbound logistics, operations, outbound logistics, marketing/sales and service, supported by procurement, technology, HR and infrastructure.",
        "**Digitisation** converts analogue material to data; **digitalisation** improves an activity using digital tools; **digital transformation** redesigns business processes, experiences, roles and sometimes the business model. Digital business strategy incorporates these capabilities into competitive choices.",
        "Amazon's **flywheel** connects customer experience, traffic, sellers and selection. Scale can lower unit costs and support lower prices. **Network effects** increase value as participation grows; **economies of scale** lower average cost. **Hypercompetition** continually erodes advantages. D'Aveni's new 7S: stakeholder satisfaction, strategic soothsaying, speed, surprise, shifting rules, signalling intent, and simultaneous/sequential thrusts. This differs from McKinsey's 7S."
      ], "A restaurant links online orders to kitchen capacity, providing realistic collection times. It differentiates through dependable service. Digital procurement records expose ingredient price increases and qualified alternatives, helping manage supplier power. These are proposed applications, not claims about a supplied case.",
      "Name the force, cite case evidence, explain the IS mechanism and the consequence. Distinguish rivals from substitutes. Evaluate cost, imitation, privacy and operational capacity. Transformation answers must explain people and process changes as well as software.",
      "How do a business model and a strategy differ?", "The model explains how value is created, delivered and captured; strategy explains competitive choices and trade-offs. Two retailers can earn retail margins while pursuing low cost or premium service."),
      lesson("leadership", "Leadership, governance, alignment & architecture", 55, [
        "**Leadership** sets direction and secures support; **management** organises execution; **governance** assigns decision rights and accountability. A CIO aligns strategy, architecture, sourcing, service reliability, security, data and skills with business goals. Business leaders share responsibility for adoption and benefits.",
        "An **IT steering committee** prioritises investment, allocates resources, resolves cross-functional conflicts and monitors benefits. It provides portfolio direction, while project teams coordinate daily delivery. Centralised governance promotes consistency; decentralisation supports local response; federation combines enterprise standards with defined local discretion.",
        "Decision-right archetypes: **business monarchy**—senior business leaders; **IT monarchy**—IT leaders; **feudal**—business units; **federal**—corporate and unit representatives; **IT duopoly**—IT plus one business leadership group; **anarchy**—individual users or small groups.",
        "**Enterprise architecture** links current and target business, data, application and technology arrangements through principles, gap analysis and a transition roadmap. It is more than an infrastructure diagram.",
        "**Luftman's six dimensions**: communications; competency/value measurement; governance; partnership; scope and architecture; skills. Its five maturity levels are initial/ad hoc, committed, established/focused, improved/managed and optimised. Assess with evidence from both business and IT, prioritise improvements and reassess.",
        "**Professionalism** requires competence, ethics, accountability, continued learning and public responsibility. Public-sector organisations pursue a public mandate and answer to citizens and oversight institutions; private-sector organisations pursue sustainable commercial value and answer to owners, boards, customers and regulators. Both need secure, reliable systems. A listed company remains private sector."
      ], "A retailer's steering committee funds shared stock data before recommendations because inaccurate availability undermines fulfilment. EA connects picking responsibilities, product identifiers, inventory interfaces and secure hosting in a sequenced roadmap.",
      "For the leadership essay use introduction → CIO role → project management → IT steering committees → conclusion. For Luftman include purpose, six dimensions, five levels and improvement actions. Comparisons require examples of both sectors and explicit similarities and differences.",
      "Name all six Luftman dimensions.", "Communications; competency/value measurement; governance; partnership; scope and architecture; skills."),
      lesson("delivery", "Project delivery, agile, prototyping & change", 46, [
        "A **project** is temporary work producing a defined outcome. The sponsor owns the business justification; the project manager coordinates delivery; process owners remain accountable for operations. A business case evaluates problems, options, benefits, costs and risks.",
        "The **project triangle** connects scope, time and cost with quality at its centre. More scope can need additional money or time. Earlier delivery can require reduced scope or feasible extra capacity. A smaller budget may require simplification or more time. These are relationships, not universal equations; extra people can add coordination overhead.",
        "The **SDLC** covers feasibility, requirements, design, development/configuration, testing, deployment and maintenance. Predictive delivery suits stable needs; agile uses short feedback cycles for evolving needs; hybrid combines appropriate controls and iteration.",
        "**Scrum** includes a Product Owner, Scrum Master and Developers; Product/Sprint Backlogs and an Increment; Sprint Planning, Daily Scrum, Sprint Review and Retrospective. A Definition of Done clarifies completion. Agile retains planning, documentation, architecture and controls.",
        "**Prototypes** clarify requirements through feedback. Low-fidelity sketches differ from high-fidelity interactions. Throwaway prototypes are discarded after learning; evolutionary prototypes are intentionally engineered further. An MVP is a usable offer testing a value hypothesis, not automatically a prototype.",
        "Global agile teams need shared priorities, explicit acceptance criteria, overlap hours, documented decisions, fair meeting rotation and automated integration/testing. Change needs sponsorship, representative user participation, role clarity, practice, transition support and reinforcement. **ADKAR**: Awareness, Desire, Knowledge, Ability, Reinforcement. Resistance may reflect valid workload or employment concerns."
      ], "With a fixed retail launch date, defer optional recommendations while protecting payment security and stock accuracy. Store pickers test a prototype and identify confusing substitutions; feedback improves the requirements before deployment.",
      "Draw the labelled triangle if requested. Discuss strategic value, mandatory requirements, deadline flexibility, resource feasibility, risks and total cost. Assess agile with benefits, limitations and conditions. Training alone is not a change programme.",
      "If scope increases but the deadline stays fixed, what can management do?", "Prioritise or remove lower-value work, fund feasible capacity, or negotiate another constraint. Assess dependencies, coordination and risk; protect required quality, security and acceptance standards."),
      lesson("security", "Security, privacy, ethics & information integrity", 30, [
        "**CIA**: confidentiality restricts access; integrity protects accuracy/completeness against improper change; availability provides access when needed. Authentication verifies identity, authorisation defines permitted actions and accountability links actions to responsible people.",
        "**MFA** uses at least two different categories: knowledge, possession and inherence. A password and PIN are both knowledge. Strong enrolment and recovery matter. Least privilege limits access; segregation separates conflicting responsibilities.",
        "**XSS** executes attacker-controlled script in a trusted site's browser context. Stored XSS persists in content, reflected XSS returns input in a response, and DOM-based XSS results from unsafe browser-side handling. Use context-appropriate output encoding, safe DOM APIs and sanitisation for permitted HTML; CSP adds defence. Validation alone is insufficient.",
        "Privacy requires a justified purpose, proportionate collection, transparency, lawful processing, retention limits, security and accountability. **Anonymisation** aims to prevent reasonable re-identification; **pseudonymisation** retains a possible link and still needs protection. Consent is one lawful basis, not universal permission.",
        "**POPIA's eight conditions**: accountability, processing limitation, purpose specification, further processing limitation, information quality, openness, security safeguards and data subject participation. **PAPA**: Privacy, Accuracy, Property, Accessibility.",
        "Stockholder theory considers responsible owners' interests; stakeholder theory considers all affected groups; social contract theory considers legitimate societal expectations. Preventive controls stop incidents, detective controls reveal them and corrective controls support recovery. Validation, reconciliation, ownership, audit trails and correction procedures protect information integrity."
      ], "A retailer combines purchases and browsing for relevant offers. It defines purposes and lawful use, minimises retention, explains profiling, controls access and provides correction channels. A stored review is displayed as text so malicious markup cannot execute.",
      "Definition questions need a mechanism-based original example. Privacy discussions should explain purpose, lawful use, transparency, minimisation, third-party responsibility, fairness and redress. Balance commercial benefits with human consequences.",
      "Why are a password and PIN not MFA?", "Both demonstrate knowledge. MFA needs different categories, such as a password plus a registered authenticator demonstrating possession."),
      lesson("innovation", "Disruption, biometrics, digital identity & AI", 30, [
        "**Sustaining innovation** improves an existing offer on established customers' performance priorities; it can be technically radical. In Christensen's theory, **disruption** starts through a viable low-end or new-market foothold and can improve towards mainstream competition. Novelty alone does not establish disruption.",
        "**Low-end** targets overserved customers with an adequate, simpler offer. **New-market** enables previous non-consumers. **Top-down/high-end diffusion** begins with premium users and broadens as access improves. The latter is included in the guide's exam discussion but is not one of Christensen's two strict footholds.",
        "**Biometrics** recognises physical or behavioural characteristics. **Digital identity** represents an entity through digital attributes and credentials. A fingerprint match alone does not perform payment: account linkage, authorisation and transaction processing are also required.",
        "Benefits include convenient access and remote participation. Risks include false matches/rejections, spoofing, exclusion, surveillance and exposure of sensitive identifiers. Use protected templates, suitable anti-spoofing, limited collection, recovery and alternative access.",
        "**Generative AI** creates content from learned patterns and can produce inaccurate outputs. AI can automate routine task components, augment employees, change skills and redesign roles. Verification, escalation and accountable oversight remain essential. Task automation does not prove a particular net employment outcome."
      ], "Fingerprint login for an existing premium banking app is usually sustaining. An affordable identity service allowing excluded people to access formal transactions may support a new-market trajectory if a viable business model and competitive path exist.",
      "For the guide's 25-mark innovation essay use introduction (4), discussion (16) and conclusion (5). Define the market and users before classification. For AI use effect → mechanism → worker implication → condition.",
      "Does technically radical innovation always disrupt?", "No. It may sustain an incumbent's offer. Disruption depends on its market foothold, business model and path towards challenging established providers."),
      lesson("cloud", "Outsourcing, offshoring, cloud & costs", 30, [
        "**Outsourcing** assigns work to an external provider. **Offshoring** locates work in another country. Domestic outsourcing is external/local; offshore outsourcing is external/foreign; captive offshoring is owned/foreign; internal domestic delivery is owned/local.",
        "Evaluate capability, whole-life cost, control, quality, security, integration, continuity and exit. Contracts need service measures and retained accountability; transferring work does not transfer all responsibility.",
        "**Cloud computing** provides on-demand network access to shared configurable resources with rapid provisioning. Its characteristics include self-service, broad network access, pooling, elasticity and measured service. A remote server alone does not demonstrate all these properties.",
        "**IaaS** supplies infrastructure while customers manage operating systems and applications. **PaaS** supplies an application platform while customers manage code/data/configuration. **SaaS** supplies an application while customers manage appropriate use, permissions and data governance.",
        "Deployment models: **public**—available for open use; **private**—exclusive to one organisation; **community**—exclusive to organisations sharing concerns; **hybrid**—distinct cloud infrastructures connected to support portability. Deployment and service models answer different questions.",
        "**Tangible costs** can be quantified financially, such as licences and migration. **Intangible costs** include difficult-to-measure disruption, morale and lost trust. Total cost includes transition, supervision, integration, operation and exit, not only advertised subscription prices."
      ], "A retailer outsources domestic support to a local provider with response targets and escalation. Running its own overseas support centre would instead be captive offshoring. Subscribing to a cloud CRM is SaaS regardless of which deployment model supports it.",
      "Give an original detailed example. Distinguish who performs the work from where it is done. Select service and deployment models separately and justify recommendations with business outcomes and conditions.",
      "Is offshoring always outsourcing?", "No. A company can own an overseas operation: captive offshoring. Outsourcing requires an external provider."),
      lesson("analytics", "Information, knowledge, BI & analytics", 20, [
        "**Data** records observations. **Information** organises them meaningfully. **Knowledge** combines information, context and experience for judgement. Explicit knowledge can be documented; tacit knowledge is embedded in experience and is harder to articulate.",
        "**SECI**: socialisation shares tacit experience; externalisation articulates it; combination integrates explicit material; internalisation learns through application. Storing a document does not automatically transfer judgement.",
        "**BI** combines reporting and analysis for decisions. Descriptive asks what happened; diagnostic asks why; predictive estimates what may happen; prescriptive recommends actions subject to constraints.",
        "Big data's five Vs are **volume, velocity, variety, veracity and value**. Useful capability requires a defined decision, data quality/ownership, architecture, skilled people, suitable methods, operational action and ethical governance.",
        "**ETL** transforms before loading; **ELT** loads before transforming. Warehouses support integrated structured analysis; lakes retain varied data in less processed forms. Both need governance. A customer view needs consistent identifiers and matching rules.",
        "Quality dimensions include accuracy, completeness, consistency, timeliness, validity and uniqueness. Correlation does not establish causation. Test recommendations through pilots or controlled comparisons and monitor changing patterns."
      ], "A sales dashboard shows umbrellas sell more in rainy weeks: information. A buyer combines that pattern with local knowledge and replenishment delays to order earlier: knowledge. Predictive demand estimates become useful only when someone can act on them.",
      "Comparisons need both examples and explicit common criteria. Recommendations should connect data → method → decision → action → measure, with privacy and bias controls.",
      "What distinguishes predictive from prescriptive analytics?", "Predictive estimates likely outcomes; prescriptive recommends actions under objectives and constraints. A demand forecast differs from a recommended replenishment plan."),
      lesson("work", "Virtual teams, Web 2.0 & blogs", 20, [
        "A **virtual team** performs continuing interdependent work across locations using digital communication. An isolated online meeting is not sufficient. Roles, shared outcomes, reliable handovers and trust make tools productive.",
        "Distributed work challenges include time zones, unclear dependencies, limited informal contact, inaccessible knowledge, language/cultural differences and excessive connectivity. Use overlap hours, explicit owners, searchable decisions, inclusive formats and sustainable availability expectations.",
        "**Web 2.0** describes participatory online creation, sharing and collaboration, including wikis, communities and social platforms. A **blog** is a dated publishing format, commonly newest first, which may allow comments and sharing.",
        "The relationship is umbrella to application: blogs can be Web 2.0 applications. Compare scope, content structure, participation, purpose and governance. Neither label guarantees reliable information.",
        "Secure work requires appropriate devices, access controls, MFA, handling rules and managed sharing. Shared repositories and documented decisions reduce reliance on private chats or individual memory."
      ], "Developers in Johannesburg and London maintain one backlog, document handovers, review increments together and rotate inconvenient meeting times. A CIO's monthly change blog publishes dated updates; a team wiki collaboratively maintains evolving guidance.",
      "Explain continuing shared work, not just communication tools. For a comparison define both concepts, give both examples and state similarities, differences and the umbrella/application relationship.",
      "How does a blog relate to Web 2.0?", "Web 2.0 is the broader participatory-web concept. A blog is a dated publishing application that can support its participation and sharing."),
      lesson("government", "E-government, G2C & G2G", 15, [
        "**E-government** applies digital capabilities to public services and administration. **E-governance** also concerns participation, accountability and governing arrangements. A website alone does not integrate fragmented processes.",
        "**G2C** links government and citizens, such as licence applications. **G2G** links public bodies, such as authorised identity verification. **G2B** links government/business; **G2E** supports employees.",
        "Objectives include access, faster service, efficiency, coordination, transparency and accountability. A one-stop entry point coordinates services so citizens need not understand departmental boundaries.",
        "**Interoperability** requires technical compatibility, agreed meanings, processes and authorised exchange. Inclusion requires attention to connectivity, devices, language, disability and digital literacy; assisted channels may remain necessary.",
        "During crises, timely G2G information supports a shared situational picture, resource coordination and less duplicated reporting. Accuracy, proportionality and access controls still apply."
      ], "A resident submits a licence application online (G2C). The licensing office verifies identity through an authorised departmental service (G2G). Better coordination behind the scenes improves the citizen-facing journey.",
      "Identify participants first, then classify. Explain a service problem, the digital action and resulting public value. Include access and governance conditions where relevant.",
      "Is a department verifying identity with another department G2C or G2G?", "G2G: both participants are government bodies. It may support a separate G2C service delivered to a resident."),
      lesson("enterprise", "Enterprise systems, process improvement & green IT", 14, [
        "**ERP** integrates core operations; **CRM** manages customer interactions; **SCM** coordinates sourcing and fulfilment. Shared definitions and connected workflows reduce re-entry and improve visibility, but cannot guarantee accurate data or adoption.",
        "**Configuration** uses supported settings; **customisation** changes or extends behaviour; **integration** links systems; **process adaptation** changes organisational work. Fit-gap analysis compares needs with standard capabilities and justifies changes by value and maintenance implications.",
        "**BPM** continually identifies, models, analyses, redesigns, implements and monitors processes. **BPR** makes fundamental redesign; continuous improvement makes smaller repeated changes. Map as-is delays/rework, define to-be responsibilities and controls, implement and measure.",
        "BPMN uses events, activities and decision gateways. Sequence flows stay within a participant; message flows connect separate participants; lanes show responsibilities.",
        "**Green IT** reduces technology's lifecycle impact; **green-by-IT** uses systems to improve other operations. Consider energy, materials, repairability, lifespan, procurement, reuse and responsible recovery. Optimised routes and accurate demand information may reduce logistics waste.",
        "Assess whole lifecycles and measures such as energy per workload, device lifespan and emissions per delivery. Cloud moves computation; it does not eliminate energy use. A rebound effect occurs when increased consumption offsets efficiency gains."
      ], "A retailer configures delivery zones, integrates inventory and dispatch, and customises substitutions only where justified. Route optimisation is measured against distance per delivery, while device reuse reduces replacement impacts.",
      "Connect each recommendation to a named process and outcome. Avoid automating unnecessary steps. Green design extends beyond paper reduction and requires evidence of total impacts.",
      "How does configuration differ from customisation?", "Configuration selects supported settings; customisation changes or extends behaviour beyond those settings, generally increasing testing, upgrade and maintenance effort.")
    ],
    erp: [
      lesson("implementation", "ERP implementation, rollouts & scope", 49, [
        "**ERP** coordinates functions and end-to-end processes using shared data and workflows. Master data describes reusable entities such as customers/products; transaction data records events such as orders and receipts.",
        "Implementation requires a business case, measurable outcomes, sponsorship, process fit, user participation, skilled staff, realistic resources, clean migration, end-to-end testing, role-based training and post-launch support. Configuring screens alone is insufficient.",
        "Lifecycle: preparation → process analysis → design → configuration/development → migration/testing → training/cutover → stabilisation/improvement. Reconcile opening balances, stock and identifiers before operational use.",
        "**Big bang** switches planned operations together: fast transition but concentrated risk. **Phased** introduces modules/locations gradually: learning but temporary interfaces. **Pilot** tests a limited unit: contained learning but possible unrepresentative conditions. **Parallel** runs old/new together: comparison but duplicate effort.",
        "**Scope creep** is uncontrolled expansion beyond approved scope. Manage a baseline, evaluate change effects on benefits/cost/time/risk, obtain appropriate decisions and update plans. An approved change is not automatically scope creep.",
        "Bumpy rollouts can arise from inaccurate data, poor process fit, weak testing, unavailable users, inadequate training and unrealistic deadlines. Integration can spread an error rapidly; it does not make input data correct."
      ], "AB Electronics needs consistent product codes across factories. Migrating conflicting codes produces unreliable stock comparisons. Business owners standardise definitions, reconcile stock and test order-to-cash across locations before cutover.",
      "For each success factor explain the causal link to orders, stock, production or service. Develop distinct reasons rather than repeatedly saying poor planning. Apply only stated scenario facts.",
      "What makes scope creep different from an approved change?", "Scope creep expands work without adequate control. An approved change is assessed, authorised and reflected in revised baselines and resources."),
      lesson("forecast", "Sales forecasting, promotions & growth", 40, [
        "A **forecast** estimates sales. Historical actuals may contain temporary promotion uplift, so normalise before growing recurring demand. Old and new promotions belong only in the months specified.",
        "Let A = historical actual, L = old promotional uplift, g = percentage growth ÷ 100 and C = new uplift. **Base = A − L; growth amount = base × g; projection = base × (1 + g); forecast = projection + C.**",
        "Retain precision through calculation and round only requested outputs. Nearest 10 is `round(value / 10) × 10`. Do not grow the old promotion or add the new promotion before growth unless the question explicitly changes the model.",
        "The 2024 example uses 2.75% growth, removes 1,245 from November and adds 2,450 to September. The 2022 example uses 3%, removes 4,200 from September, adds 3,700 to August and rounds requested figures to the nearest 10.",
        "The 2021 example uses 2%, removes 2,500 from October and adds 3,000 to July. This app includes all three tables as editable presets. Forecast totals are sales quantities, not currency."
      ], "November 2024: base = 42,321 − 1,245 = 41,076; growth = 41,076 × 0.0275 = 1,129.59; projection and forecast = 42,205.59. September: 37,000 × 1.0275 + 2,450 = 40,467.50.",
      "Show every requested row/column, formula, substitution and unit. Check the promotion months. Explain rounding and keep unrounded calculations available for checking.",
      "Why remove an old promotion before applying growth?", "It is exceptional uplift already included in the historical actual. Removing it avoids treating temporary demand as recurring demand."),
      lesson("processes", "Functional areas, processes & integration", 40, [
        "A **functional area** groups similar expertise and responsibilities; a **business process** is a sequence producing an outcome, often across functions. Departments are usually vertical; order-to-cash and procure-to-pay are horizontal flows.",
        "**Marketing/Sales** manages needs, products, pricing, promotion, customers, orders and forecasts. **SCM** handles purchasing, receiving, inventory, production and distribution. **Accounting/Finance** handles transactions, cash, costing and reports. **HR** handles staffing, training, time, performance and compensation.",
        "Order-to-cash: order → checks → fulfilment → billing → payment. Procure-to-pay: requirement → approved purchase order → receipt → invoice verification → payment. Plan-to-produce links demand, materials, capacity and output.",
        "Material ordering starts with production requirements and stock. Purchasing orders, logistics receives/checks, production uses material and accounting handles the invoice/payment. Shared records reduce disconnected re-entry and support status visibility.",
        "A small cash-based business still needs all four responsibilities even if one person performs several roles. Integration connects responsibilities without requiring one department per function."
      ], "A coffee shop's Sales records demand; SCM replenishes beans; Accounting records supplier payments and daily receipts; HR schedules and trains baristas. A sale can update demand information, stock and cash records across these areas.",
      "Compare using the same criteria and provide concrete examples. For a process describe trigger, steps, handovers and outcome. Identify both information consumed and produced.",
      "Is order-to-cash a function or a process?", "A process: connected activities cross sales, logistics and accounting to turn a customer order into fulfilment and received payment."),
      lesson("crm", "CRM tools, benefits & one-to-one marketing", 31, [
        "**CRM** combines strategy, people, processes and software to attract, serve and retain customers. Operational CRM executes interactions; analytical CRM studies patterns; collaborative CRM shares context across teams/channels.",
        "Tools include contact records, lead qualification, opportunity pipelines, sales-force tasks/quotations, campaign segmentation, service tickets, warranty/returns histories, analytics, personalisation and self-service knowledge portals.",
        "Shared history improves informed service; reminders reduce missed follow-ups; complaint resolution supports retention; segmentation improves relevance; analytics helps prioritise opportunities. **Cross-selling** offers a related product; **up-selling** offers a higher-value version.",
        "**One-to-one marketing** tailors an interaction to a particular individual. Identify → Differentiate → Interact → Customise. Mass marketing uses a broad message; segment marketing addresses groups.",
        "Benefits require accurate records, useful workflows and sustained adoption. Irrelevant or excessive messages can damage trust. A feature such as a history screen is not itself the business benefit: explain how staff use it."
      ], "A retailer records a customer's printer model and offers compatible ink. This is individual relevance rather than a generic discount. A service agent continues an unresolved warranty case using the purchase and interaction history.",
      "For tools use activity → tool → function → application. For an argument state a position, develop mechanisms, acknowledge implementation limits and conclude. Avoid promising automatic profit.",
      "How do cross-selling and up-selling differ?", "Cross-selling offers related products, such as a phone case; up-selling offers a higher-value version, such as a premium phone."),
      lesson("hr", "Human resources & SAP organisational concepts", 30, [
        "HR manages workforce planning, recruitment, personnel records, communication, training, performance, compensation, attendance, relations and succession. HCM emphasises capabilities and development.",
        "A **task** is an activity, such as inspecting a delivery. A **job** is a general work classification, such as warehouse clerk. A **position** is a specific post, such as morning-shift clerk at Site A. A **person** is the individual occupying it.",
        "One job may describe several positions. Positions and required work persist when an individual leaves. A person has individual capabilities, employment and time information.",
        "**Requirements** describe capabilities a job/position needs. **Qualifications** describe capabilities a person possesses, including skills, experience, education, certifications and proficiency. Profile matching identifies suitability and development gaps.",
        "Payroll combines employee, pay and time data for remuneration and deductions; integration links the resulting costs and obligations with accounting. Correct access and accurate source records remain necessary."
      ], "A payroll position requires advanced spreadsheet skills; an applicant has intermediate proficiency. Profile comparison reveals a training gap. The requirement belongs to the role, and the qualification belongs to the person.",
      "Give one example for each requested organisational concept. Use an action for a task, not a job title. Qualifications include experience and skills, not only degrees.",
      "Where do requirements and qualifications belong?", "Requirements attach to work—a job or position. Qualifications describe the skills, knowledge and experience a person possesses."),
      lesson("saas", "Software as a Service", 25, [
        "**SaaS** is a model in which a provider operates an application accessed over a network, usually by subscription. It supplies a usable application, not merely virtual servers (IaaS) or a development platform (PaaS).",
        "The provider mainly manages application operations and updates. Customers retain responsibility for users, permissions, data quality, appropriate configuration, business processes and suitable use.",
        "Advantages include reduced initial hosting investment, faster provisioning, scaling users, managed upgrades, distributed access and less infrastructure administration. Business preparation, integration and adoption work still remain.",
        "Risks include network/provider dependence, outages, limited customisation, data portability and exit difficulties, integration effort and recurring cost. Compare whole-life cost and continuity needs with on-premises operation.",
        "When asked for one disadvantage, develop one causal chain rather than listing unrelated objections. Explain the dependency, operational interruption, knock-on consequences and mitigation."
      ], "If connectivity to SaaS ERP fails, a warehouse may be unable to verify allocation or confirm dispatch despite having goods. Dispatch delays affect billing and enquiries. Redundant connectivity, provider recovery commitments and tested continuity procedures reduce but do not remove the dependence.",
      "State responsibilities accurately. SaaS does not eliminate implementation or data governance. A ten-mark discussion of one disadvantage needs depth, an example and consequences.",
      "Does using SaaS transfer all security responsibility to the provider?", "No. Customers still manage identities, permissions, data governance, appropriate configuration and business use, while the provider operates the application platform."),
      lesson("value", "Value analysis & process improvement", 25, [
        "**Value analysis** examines what each activity contributes and whether that contribution justifies its time/cost. Real value directly contributes what customers value; business value is necessary operational support; no value is avoidable work without either contribution.",
        "Expand classification by measuring actual active time, waiting and cost against justified contribution. Processing time is active work; lead time is total elapsed time, including queues and handovers.",
        "Define boundaries/outcome → list steps → classify contribution → measure → remove duplication/delay → redesign → preserve controls → verify before/after results.",
        "**Saving = old − new. Percentage reduction = saving ÷ original × 100.** Distinguish time and money and use the correct original denominator.",
        "Necessary authorisation and financial records may provide business value even if customers do not directly pay for them. Make these efficient instead of deleting all non-customer-facing steps."
      ], "An expense process improves from 5 to 2 days and R80 to R35. Time saving = 3 days (60%); cost saving = R45 (56.25%). Reusing approved data removes duplicate entry while payment authorisation remains.",
      "Explain all three activity classes and expansion into measured time and cost. Do not confuse process value analysis with investment valuation or automate waste without questioning it.",
      "Why can a non-customer-facing control still add value?", "It can be necessary business support, such as payment authorisation. Improve its efficiency while retaining the protection it provides."),
      lesson("sales", "SAP sales orders, fields, pricing & credit", 20, [
        "Order-to-cash covers presales/quotation, order entry, pricing/availability/credit checks, delivery preparation, shipping, billing and payment. A sales order has header, item and schedule information; document flow links related records.",
        "**Sold-to** is the ordering customer; **ship-to** is the recipient/location. The customer **PO number** supports matching and enquiries; PO date identifies that purchase-order date. Requested delivery date is the customer's request, not a confirmed promise.",
        "**Material** links a product code to master data; quantity specifies requested sales units; **SU** identifies cases/pieces; description identifies the item; net value reflects pricing. Payment terms define when payment is due.",
        "Delivering plant supplies goods; delivery/billing blocks stop those activities until resolved; pricing date selects relevant pricing conditions. Sales area combines sales organisation, distribution channel and division.",
        "**New exposure = outstanding balance + new order. Available credit = limit − outstanding balance.** Compare new exposure with the limit. Production SAP credit rules may include additional configured exposures; the lab teaches the simplified guide model."
      ], "100 cases × R200 = R20,000; a 5% discount gives R19,000 net before other applicable amounts. Credit limit R50,000, balance R35,000 and order R12,000 produce R47,000 exposure with R3,000 headroom.",
      "Explain what each field stores and its purpose. Never invent A–E mappings absent from a figure. Keep customer PO numbers distinct from your sales-order numbers and requested dates distinct from confirmed dates.",
      "Can sold-to and ship-to differ?", "Yes. A retailer's head office can place the order while a branch receives delivery. They can also be the same entity."),
      lesson("mix", "Production planning & product mix", 20, [
        "An aggregate product-group plan is **disaggregated** into individual products. **Product quantity = group plan × product share ÷ 100.** The share belongs to the named product.",
        "A forecast estimates demand; a production plan specifies intended output considering stock, capacity and constraints. Where needed: **required production = forecast + desired ending inventory − beginning inventory**. Do not apply adjustments without data.",
        "Keep units consistent: cases × share gives cases. Converting to bars requires a supplied bars-per-case factor. A fractional result is the exact mathematical allocation; whole-case decisions require a stated convention.",
        "The guide's 2024 shares are 45% and 39%, leaving 16% unspecified. Do not normalise them to 100%; calculate the requested share against the original group total.",
        "The lab reports allocations and any unallocated or overallocated balance. It is a proportional allocation calculator, not a profit-optimising solver with capacity constraints."
      ], "10,000 × 70% = 7,000 cases (2021). 8,000 × 45% = 3,600 cases (2022). 10,345 × 45% = 4,655.25 cases (2024); 39% is 4,034.55 cases and 16% remains unallocated.",
      "Show formula, percentage conversion, answer and unit. Do not invent case size or silently round. Incomplete shares do not change the requested percentage.",
      "What is 45% of a 10,345-case plan?", "4,655.25 cases. Individual bars cannot be determined without a bars-per-case factor. The exact allocation is not automatically rounded."),
      lesson("cost", "Manufacturing costs & integrated costing", 15, [
        "**Manufacturing cost = direct materials + direct labour + manufacturing overhead.** Direct materials are economically traceable inputs/packaging; direct labour is traceable production work; overhead comprises other factory costs needing allocation.",
        "Factory rent, depreciation, utilities and supervision can be overhead. Advertising and general administration are not manufacturing overhead. Keep selling/admin expenses separate.",
        "A **BOM** specifies components/quantities; a **routing** specifies operations/work centres. Standard cost is a predetermined expectation; actual cost reflects recorded use; variance compares them.",
        "**Overhead rate = budgeted overhead ÷ budgeted allocation base. Applied overhead = rate × actual base used. Unit cost = manufacturing total ÷ units produced.** The base might be machine or labour hours, as specified.",
        "Costing takes effort because prices, quantities, labour and allocation rules vary across products and departments. ERP links purchasing, BOMs, production, HR and accounting, reducing manual assembly but still requiring accurate records and sound rules."
      ], "For one case: materials R120; labour 0.5 h × R80 = R40; overhead 0.5 h × R60 = R30. Manufacturing cost = R190 per case. For 100 identical cases the total is R19,000, assuming those same rates and use.",
      "Classify costs before adding them. Distinguish totals from per-unit values. A zero output cannot yield a finite unit cost; the lab shows that explicitly.",
      "Is advertising manufacturing overhead?", "No. It is a selling expense. Manufacturing overhead covers indirect factory production costs."),
      lesson("benefits", "ERP evolution, benefits & total cost", 15, [
        "Evolution: inventory control records stock; **MRP** derives materials from plans, BOMs and inventory; **MRP II** extends to manufacturing resources/capacity; ERP spans organisation-wide functions; extended integration links partners and channels.",
        "**TCO** covers acquisition, implementation, operation, maintenance and eventual replacement. Include licences/subscriptions, equipment, consultants, internal project time/backfill, training, migration, interfaces, development, testing, cutover, support and upgrades.",
        "Benefits arise through common records, less duplication, coordinated planning, comparable reporting and reliable service. Explain how each mechanism changes work instead of repeating speed and efficiency.",
        "A shared stock record supports availability checks; reusing order data reduces transcription; connected demand/production improves replenishment; common definitions simplify reporting; status visibility improves enquiries.",
        "Benefits depend on process fit, reliable data, access controls and adoption. Owning integrated software is not proof that business outcomes improved."
      ], "An implementation budget includes existing employees' project hours even when salaries continue unchanged. Their time has a cost and may require backfill. Better visibility only improves service if stock records are maintained.",
      "For five cost factors provide distinct categories, including people. For five benefits develop each mechanism and outcome. Purchase price alone is not TCO.",
      "Why include salaried staff time in TCO?", "Project work consumes scarce capacity and may require backfill or delay other work. A continuing salary does not make that resource free."),
      lesson("accounting", "Accounting, invoicing & consolidation", 14, [
        "**AR**: customers owe us. **AP**: we owe suppliers. The general ledger classifies transactions; invoices specify charges; credit memos reduce customer amounts owed; reconciliation compares records and resolves differences.",
        "Financial accounting supports transactions/statements; management accounting supports internal costing, planning and control. Inputs include sales, supplier invoices, payroll and production; outputs include invoices, balances, payments, financial statements and profitability reports.",
        "Disconnected sales, shipping and accounting can produce inconsistent discounts, billing for ordered rather than shipped quantities, late invoices/credit memos, inaccurate balances and unnecessary collections.",
        "**Consolidated statements** present a parent and subsidiaries as one economic group. Standardise accounts, periods and formats; collect balances; translate currencies where needed; identify/eliminate intragroup transactions and balances; reconcile adjustments.",
        "Consolidation is not simple addition: internal sales cannot be counted as external group revenue. Shared identifiers and traceable adjustments support reliable reporting."
      ], "A customer orders 100 cases but receives 80. Billing from the original order overcharges 20 cases, causing disputes and delayed payment. Linking shipment confirmation to billing aligns financial records with what was delivered.",
      "Keep input/output direction clear. If asked for two inputs and two outputs, provide that split. Explain intragroup eliminations in consolidation and include requested examples.",
      "Why is consolidation more than adding subsidiary totals?", "The group must align accounting records and eliminate intragroup sales, balances and other relevant internal effects to report as one economic entity."),
      lesson("commerce", "E-commerce integration with ERP", 10, [
        "E-commerce transacts through electronic channels. **B2B** serves businesses; **B2C** serves consumers. A storefront handles browsing/baskets/orders; ERP supports the operations and accounting needed behind them.",
        "Exchange product/pricing, availability, orders, shipment status, payment status and returns/refunds. Define direction, timing, ownership and exception handling for each flow.",
        "Integration reduces repeated entry, inconsistent stock promises and manual reconciliation. Reservations help prevent two channels promising the same last item; status updates improve customer tracking.",
        "Risks include cost, mismatched identifiers/units, delayed messages, duplicate orders on retry, unauthorised access and ongoing maintenance. Reliable interfaces need validation, monitoring and safe retry handling.",
        "Judge the scale and need: a very small business may begin simply; larger volumes often justify integrated fulfilment and accounting. The storefront and ERP have complementary roles."
      ], "An online order reserves the last appliance, starts fulfilment and later exposes shipment status. If an order-transfer retry occurs, a unique reference prevents processing the same purchase twice.",
      "Take a position, explain operational mechanisms, give an example, discuss costs/conditions and conclude. Website appearance alone is not the integration argument.",
      "What prevents integrated sales channels promising the same last item?", "Accurate shared availability and suitable stock reservation/allocation, supported by reliable, timely interfaces and exception handling."),
      lesson("fraud", "ERP controls against fraud", 10, [
        "Fraud is intentional deception for improper benefit. Integration creates traceability, while configured permissions, workflows and oversight reduce opportunity. No software guarantees honesty.",
        "**Role-based access and segregation of duties** restrict activities and separate incompatible powers. Supplier creation, invoice approval and payment release should not be independently controlled by one user.",
        "**Approval limits** require additional authority above thresholds. **Three-way matching** compares purchase order, goods receipt and supplier invoice to challenge unsupported charges.",
        "**Audit trails** record who changed what and when. Sensitive master-data controls and exception reports can flag bank changes immediately before payment. Logs support detection only when reviewed and acted upon.",
        "Preventive controls try to stop misuse; detective controls reveal suspicious events. Excess rights, poor configuration and collusion can weaken both. Retain accountable investigation and correction."
      ], "A supplier bank-account change triggers independent verification and a report. The same user cannot create the supplier and release payment. High-value payments require another authorised approver.",
      "If asked for three ways, develop three different mechanisms with operation, fraud opportunity and example. Passwords alone do not describe authorisation.",
      "What documents are compared in three-way matching?", "The purchase order, goods receipt and supplier invoice, checking that billed goods and terms are supported by ordering and receiving records."),
      lesson("marketing", "Five marketing management decisions", 10, [
        "The guide's five decisions are **product, quantity, promotion, distribution and price**. Keep quantity distinct rather than substituting an unrelated fifth category.",
        "Product selects what to offer from needs/trends/profitability. Quantity uses forecasts, stock and capacity. Promotion selects messages/channels and evaluates response.",
        "Distribution chooses customer channels, locations and delivery arrangements. Price balances costs, competition, demand and profitability. Decisions must align with supply and financial information.",
        "**Markup = profit ÷ cost × 100. Gross margin = profit ÷ selling price × 100.** The denominator differs. At R100 cost and R125 price, profit is R25, markup is 25% and margin is 20%.",
        "A successful promotion requires stock and fulfilment capacity; sales volume without sufficient margin may not improve profit. Use relevant measures rather than assuming demand alone proves success."
      ], "A snack producer chooses a protein bar, forecasts case quantities, tests a targeted promotion, distributes through retailers and checks a viable selling price using production costs and competitive information.",
      "Discuss each decision with information needed and a concrete example. Connect marketing with supply and accounting; listing labels alone is insufficient for discussion marks.",
      "At R100 cost and R125 price, what are markup and margin?", "Profit is R25. Markup = 25/100 = 25%; gross margin = 25/125 = 20%."),
      lesson("rfid", "Radio Frequency Identification", 5, [
        "**RFID** identifies tagged objects using radio communication. A tag carries an identifier; a reader/antenna captures it; software validates events and passes relevant updates to business systems.",
        "Passive tags obtain operating energy from the reader signal; active tags have their own power source. RFID is not satellite positioning.",
        "Applications include pallet receiving/dispatch, inventory identification and asset management. Suitable installations can read multiple tags without direct optical alignment.",
        "Barcodes use optical scanning and generally lower-cost labels. RFID has placement, materials, interference and cost constraints. Read reliability must be tested in actual conditions.",
        "Detection alone does not prove a business event is complete. Validate duplicates, direction and expected goods before updating stock or documents."
      ], "A warehouse reads tagged pallets at receiving, validates the identifiers against an expected delivery and posts the appropriate receipt. Unexpected or repeated reads require checks instead of blindly increasing inventory.",
      "Expand the acronym, explain tag/reader operation, give a business application, a benefit and a limitation. Do not claim perfect reads or batteries in every tag.",
      "Do passive RFID tags require an onboard battery?", "No. They obtain operating energy from the reader signal. Active tags have their own power source."),
      lesson("stockout", "Stockouts in supply chain management", 1, [
        "A **stockout** occurs when available inventory is insufficient to satisfy demand when required. Inventory need not be exactly zero.",
        "Finished-goods shortages can cause backorders or lost sales; material shortages can interrupt production. Inaccurate records, unexpected demand, supplier delays and weak replenishment are possible causes.",
        "Forecasting, accurate availability, supplier lead-time monitoring and appropriate replenishment help manage the risk. Extra inventory has costs, so assess service/cost trade-offs.",
        "Distinguish available stock from nominal physical stock: inventory already allocated, unusable or in the wrong location may not meet the demand in question."
      ], "A customer needs 10 cases today but only 6 are available. The business faces a four-case shortage even though stock is positive.",
      "For the guide's one-mark definition write one precise sentence connecting insufficient availability to demand at the required time.",
      "Must stock be zero for a stockout?", "No. Any available quantity below demand at the required time can create a stockout.")
    ]
  };

  // Dedicated terminology supplements the active-recall card for every lesson.
  const TERMS = {
    isst: [
      ["MFA", "Authentication using at least two different categories: knowledge, possession and inherence. Password + PIN is one category."],
      ["XSS", "Untrusted script executes in a trusted application's browser context. Encode output for its context; sanitise permitted HTML and use safe DOM APIs."],
      ["Cloud deployment models", "Public, private, community and hybrid. These describe access/arrangement; IaaS, PaaS and SaaS describe the service provided."],
      ["Strategy triangle", "Business strategy, organisational strategy and IS strategy must reinforce one another."],
      ["Five Forces", "Rivalry, threat of entrants, threat of substitutes, buyer power and supplier power analyse industry competitive pressure."],
      ["Luftman maturity levels", "Initial/ad hoc → committed → established/focused → improved/managed → optimised."],
      ["EA domains", "Business, data/information, applications and technology, connected through current/target designs and a roadmap."],
      ["Flywheel", "A reinforcing loop: experience → traffic → sellers → selection → experience, supported by scale, lower unit cost and lower prices."],
      ["Network effect", "Participation increases value for other users. It differs from economies of scale, where volume reduces average cost."],
      ["Hypercompetition", "Rapid competitive moves repeatedly erode advantages, requiring continuous renewal."],
      ["ADKAR", "Awareness, Desire, Knowledge, Ability, Reinforcement: a change checklist covering more than training."],
      ["PAPA", "Privacy, Accuracy, Property, Accessibility: four issues in information ethics."],
      ["CIA", "Confidentiality, Integrity, Availability: three security objectives."],
      ["IaaS / PaaS / SaaS", "Infrastructure resources / application development platform / usable hosted application. Customer responsibilities differ."],
      ["Captive offshoring", "A company's own operation located abroad; it is offshoring without outsourcing."],
      ["SECI", "Socialisation, Externalisation, Combination, Internalisation: modes of tacit/explicit knowledge conversion."],
      ["Low-end / new-market disruption", "Low-end begins with overserved customers; new-market enables previous non-consumers. Both require a viable business model and competitive path."],
      ["G2C / G2G", "Government-to-citizen service / exchange between government bodies."],
      ["Green IT / green-by-IT", "Reduce technology's lifecycle impacts / use information systems to reduce impacts in other operations."],
      ["Prototyping", "Early representations elicit feedback and clarify requirements. They are not automatically secure, integrated production systems."]
    ],
    erp: [
      ["ERP", "Enterprise Resource Planning: shared data and connected workflows supporting organisation-wide processes."],
      ["CRM tools", "Contact records, leads, opportunity pipelines, sales automation, campaigns, service tickets, warranty histories, analytics and self-service."],
      ["SaaS", "Software as a Service: a provider operates a network-accessed application; customers retain identity, data and business-use responsibilities."],
      ["Stockout", "Available inventory cannot meet demand when required; the available quantity may still be positive."],
      ["Value analysis", "Classify activities as real, business or no value; extend analysis by measuring active/waiting time and cost, then verify improvements."],
      ["Forecast formula", "Forecast = (historical actual − old promotional uplift) × (1 + growth rate as a decimal) + new promotional uplift."],
      ["Product mix allocation", "Group plan × product share. Preserve units and do not normalise unspecified shares."],
      ["Manufacturing cost", "Direct materials + direct labour + manufacturing overhead. Selling and general administration are separate."],
      ["Sold-to / ship-to", "Customer placing the order / recipient or delivery location. They may differ."],
      ["Customer PO number", "The customer's purchase-order reference, used to match orders, invoices and enquiries; not your sales-order number."],
      ["Task / job / position / person", "Activity / general work type / specific organisational post / individual occupying the post."],
      ["Requirements / qualifications", "Capabilities a job needs / capabilities a person possesses."],
      ["AR / AP", "Accounts receivable: customers owe us. Accounts payable: we owe suppliers."],
      ["BOM / routing", "Bill of Materials: required components and quantities. Routing: operations and work centres."],
      ["MRP / MRP II", "Material requirements planning / manufacturing resource planning, extending materials planning to broader resources and capacity."],
      ["TCO", "Total Cost of Ownership: acquisition, implementation, operation, maintenance and eventual replacement."],
      ["Three-way matching", "Compare purchase order, goods receipt and supplier invoice to identify unsupported or inconsistent charges."],
      ["One-to-one marketing", "Identify, differentiate, interact and customise an offer using individual customer needs and behaviour."],
      ["RFID", "Radio Frequency Identification: tags communicate with readers; validated events can update business systems."],
      ["Lead time / processing time", "Total elapsed time including waits / active work time. Reducing queues can matter more than accelerating a short task."]
    ]
  };
  const CARD_BANK = Object.entries(LESSONS).flatMap(([module, rows]) => [
    ...TERMS[module].map(([front, back], i) => ({ id: `${module}-term-${i}`, module, front, back })),
    ...rows.map(l => ({ id: `${module}-${l.id}`, module, front: l.question, back: l.answer }))
  ]);

  // Answers are shuffled with their identity, never by changing the answer key.
  const question = (id, module, topic, prompt, options, correct, explanation) =>
    ({ id, module, topic, prompt, options, correct, explanation });
  const QUESTIONS = [
    question("s1","isst","strategy","A retailer and a rental service meet the same clothing need differently. Which force is illustrated?",["Rivalry only","Threat of substitutes","Supplier power","Threat of entrants only"],1,"Substitutes satisfy the same underlying need differently. A comparable retailer is more directly a rival."),
    question("s2","isst","strategy","Which statement describes a business model?",["How value is created, delivered and captured","The future position an organisation desires","Only its IT architecture","Its competitive position alone"],0,"A business model explains value and economic logic. Strategy explains choices about where and how to compete."),
    question("s3","isst","strategy","Which change best represents digital transformation?",["Scanning one receipt","Replacing a printer","Redesigning ordering, roles and fulfilment around shared digital capabilities","Typing an existing form"],2,"Transformation coordinates technology with business processes, roles, experiences and potentially the model; simple conversion is digitisation."),
    question("s4","isst","strategy","How does a network effect differ from economies of scale?",["They are identical","Network effects always lower hardware prices","Scale concerns customer passwords","Participation raises user value; scale reduces average cost"],3,"A growing seller/buyer network can increase value, while higher volume can spread costs. These mechanisms can reinforce each other."),
    question("s5","isst","leadership","Which is NOT a Luftman alignment dimension?",["Partnership","Skills","Market capitalisation","Governance"],2,"The six dimensions are communications, competency/value measurement, governance, partnership, scope and architecture, and skills."),
    question("s6","isst","leadership","What does IT governance primarily establish?",["Daily task estimates","Decision rights and accountability","Source-code formatting","Every employee's password"],1,"Governance defines who decides and answers for outcomes; management organises execution within those arrangements."),
    question("s7","isst","leadership","Which set describes enterprise architecture domains?",["Business, data, applications, technology","Price, promotion, product, quantity","Scope, time, cost, quality only","Citizens, government, employees, businesses"],0,"EA connects business, information/data, application and technology arrangements through principles and a transition roadmap."),
    question("s8","isst","delivery","Scope increases while deadline and budget remain fixed. What is the best response?",["Assume quality stays unchanged","Remove all testing","Promise unlimited productivity","Assess risk and negotiate scope, resources or schedule"],3,"Unmanaged constraints threaten quality. Reprioritise or negotiate explicit trade-offs while protecting mandatory standards."),
    question("s9","isst","delivery","What is the main purpose of a requirements prototype?",["Replace all production testing","Clarify needs through early user feedback","Guarantee a release date","Eliminate architecture"],1,"A prototype is a learning representation, not automatic evidence of production readiness."),
    question("s10","isst","delivery","Which practice supports agile work across time zones?",["Keep decisions in private messages","Omit acceptance criteria","Use shared priorities, explicit handovers and suitable overlap hours","Require every location to work continuously"],2,"Distributed agility needs accessible decisions, coordinated priorities, feedback and sustainable collaboration."),
    question("s11","isst","security","Which example uses two authentication factor categories?",["Password and PIN","Two passwords","Two security questions","Password and registered authenticator code"],3,"A password demonstrates knowledge and an authenticator demonstrates possession. Two knowledge secrets remain one category."),
    question("s12","isst","security","What most directly helps prevent XSS when displaying a plain-text review?",["Render it as text using safe DOM APIs","Execute the review to check it","Hide the submit button","Only require a longer password"],0,"Treating untrusted review content as text prevents it becoming executable markup. Encoding must fit the output context."),
    question("s13","isst","security","Pseudonymised customer data should be treated as:",["Automatically anonymous","Still requiring protection because a link may remain","Public by default","Always inaccurate"],1,"Pseudonymisation replaces identifiers while retaining possible linkage. It is different from effective anonymisation."),
    question("s14","isst","innovation","A simpler viable offer starts with overserved customers and improves towards mainstream demand. This is:",["New-market disruption","Top-down diffusion","Low-end disruption","All sustaining innovation"],2,"Low-end starts with overserved customers; new-market enables non-consumers. Technical novelty alone does not determine disruption."),
    question("s15","isst","innovation","Which AI employment prediction is most defensible?",["Every automated task eliminates a whole job","No skills will change","All outputs are reliable","Tasks and roles may change; net effects depend on adoption, demand and redeployment"],3,"Distinguish task automation, augmentation, reskilling and uncertain overall employment effects."),
    question("s16","isst","cloud","A company runs its own support centre abroad. This is:",["Captive offshoring","Domestic outsourcing","Always offshore outsourcing","SaaS"],0,"Location abroad makes it offshoring. Ownership by the company means the work is not outsourced."),
    question("s17","isst","cloud","Which is a cloud deployment model?",["PaaS","Community cloud","SaaS","IaaS"],1,"Public, private, community and hybrid are deployment models. IaaS/PaaS/SaaS are service models."),
    question("s18","isst","analytics","A model recommends stock quantities under cost and capacity limits. This is:",["Descriptive","Diagnostic","Prescriptive","Raw data capture"],2,"Prescriptive analytics recommends actions under objectives/constraints. Predictive analytics estimates future outcomes."),
    question("s19","isst","analytics","What is tacit knowledge?",["Only database rows","Any published manual","A financial statement","Experience-based understanding that is hard to articulate"],3,"Tacit judgement can be shared through experience, coaching and practice, but is not fully captured merely by storing documents."),
    question("s20","isst","work","Which comparison between Web 2.0 and blogs is accurate?",["Web 2.0 is an umbrella concept; a blog is a dated publishing format","Every Web 2.0 application is a blog","Blogs cannot allow participation","They are unrelated"],0,"A blog can be one participatory-web application. The concepts differ in scope."),
    question("s21","isst","government","A licensing department checks identity with another public body. Which relationship applies?",["G2C","G2G","B2C","G2E"],1,"Both communicating parties are government bodies, even if the exchange supports a citizen service."),
    question("s22","isst","enterprise","Choosing supported ERP approval settings is:",["Always custom coding","Reengineering by definition","Configuration","Offshoring"],2,"Configuration uses standard supported settings; customisation changes or extends behaviour beyond them."),
    question("s23","isst","enterprise","Which green IT claim is most defensible?",["Cloud eliminates electricity use","Paperless always means zero impact","Every new efficient device is automatically best","Assess energy, materials, lifespan and disposal across the lifecycle"],3,"Lifecycle assessment avoids moving impacts elsewhere or ignoring manufacturing, replacement and rebound effects."),
    question("s24","isst","delivery","Which is the correct ADKAR sequence?",["Awareness, Desire, Knowledge, Ability, Reinforcement","Architecture, Data, Knowledge, Access, Reporting","Approval, Design, Kickoff, Audit, Release","Agility, Delivery, Knowledge, Analysis, Risk"],0,"ADKAR addresses motivation and practical capability as well as understanding and ongoing reinforcement."),
    question("e1","erp","implementation","Which is scope creep?",["A formally assessed and approved change","Uncontrolled expansion beyond approved scope","A planned training session","Completing acceptance tests"],1,"Scope creep is uncontrolled addition. Approved changes should be assessed and incorporated into revised baselines."),
    question("e2","erp","implementation","What is a major trade-off of parallel rollout?",["It needs no reconciliation","It prevents every error","Comparison/fallback at the cost of duplicate work","It cannot involve users"],2,"Running both systems permits comparison, but creates additional capture and reconciliation effort."),
    question("e3","erp","forecast","Historical sales are 42,321; old uplift is 1,245; growth is 2.75%; new uplift is zero. What is the forecast?",["43,484.8275","41,076","43,450.59","42,205.59"],3,"Base = 42,321 − 1,245 = 41,076. Projection = 41,076 × 1.0275 = 42,205.59. No new uplift is added."),
    question("e4","erp","forecast","Which forecasting sequence is correct?",["Remove old uplift → apply growth → add new uplift","Grow actuals → add old uplift","Add both promotions → apply growth","Ignore promotions"],0,"Normalise recurring demand before growth, then add the new exceptional uplift in its specified month."),
    question("e5","erp","forecast","Round 54,026.59 to the nearest 10.",["54,020","54,030","54,027","54,000"],1,"Round 54,026.59 ÷ 10, then multiply by 10. Retain precision until the requested rounding step."),
    question("e6","erp","processes","Which is a cross-functional business process?",["Human Resources","Accounting department","Order-to-cash","Marketing department"],2,"Order-to-cash links activities across sales, fulfilment and accounting; the other choices name functional areas."),
    question("e7","erp","crm","Which is an example of up-selling?",["Offering compatible ink","Recording a complaint","Adding a phone case","Offering a higher-value model"],3,"Up-selling offers a premium version. Related accessories are cross-selling."),
    question("e8","erp","crm","Which CRM mechanism most directly improves continuity of service?",["Shared customer interaction history","Independent customer files","Deleting unresolved cases","Sending every customer identical messages"],0,"Shared history lets staff understand previous contact and continue the case without making the customer restart."),
    question("e9","erp","hr","A role needs advanced Excel; an employee has intermediate Excel. These are respectively:",["Two jobs","A requirement and a qualification","Two tasks","A person and a position"],1,"The role has requirements; the person has qualifications. Comparison identifies a capability gap."),
    question("e10","erp","hr","Which describes a position?",["Inspect goods","Warehouse clerk as a work type","Morning-shift warehouse-clerk post at Site A","Ayesha Khan"],2,"A position is a specific organisational post; task, general job and person are different objects."),
    question("e11","erp","saas","Which responsibility normally remains with a SaaS customer?",["Every provider server repair","All provider data-centre power","The provider's application release pipeline","User access, data quality and appropriate business use"],3,"SaaS reduces infrastructure administration but leaves significant identity, data and process responsibilities."),
    question("e12","erp","value","A process changes from 5 to 2 days. The time reduction is:",["60%","40%","150%","3%"],0,"Saving = 3 days; reduction = 3 ÷ original 5 × 100 = 60%."),
    question("e13","erp","value","Which activity can have business value without direct customer value?",["Unnecessary duplicate entry","Required payment authorisation","Avoidable queueing","Rekeying unchanged data"],1,"Necessary controls support the business. Improve their efficiency instead of removing them simply because customers do not directly pay for them."),
    question("e14","erp","sales","Which field identifies the delivery recipient?",["Sold-to party","Customer PO number","Ship-to party","Pricing date"],2,"Ship-to defines the recipient/location. Sold-to is the ordering customer."),
    question("e15","erp","sales","Limit R50,000; balance R35,000; new order R18,000. Under the simplified model:",["Headroom is R15,000 after the order","Exposure is R18,000","Exposure is R35,000","Exposure is R53,000, exceeding the limit by R3,000"],3,"New exposure = 35,000 + 18,000 = 53,000. Compare against the R50,000 limit."),
    question("e16","erp","mix","What is 45% of a 10,345-case plan?",["4,655.25 cases","4,655.25 bars without a conversion factor","5,541.964 cases by normalising two shares","465,525 cases"],0,"10,345 × 0.45 = 4,655.25 cases. Preserve units and do not normalise incomplete shares."),
    question("e17","erp","mix","Shares total 84%. What should the allocation calculator show?",["Automatically scale them to 100%","16% unallocated","Reject each individual share as meaningless","Ignore the original total"],1,"Each share still applies to the original plan. Report the missing portion explicitly rather than changing the instruction."),
    question("e18","erp","cost","Materials R120, direct labour R40, factory overhead R30. Manufacturing cost is:",["R160","R150","R190","R70"],2,"Manufacturing cost includes all three elements: 120 + 40 + 30 = R190."),
    question("e19","erp","benefits","Which ERP cost should a TCO calculation include?",["Only software purchase","Only visible equipment","Only consultants","Employee project time and training as well as technology"],3,"TCO includes acquisition, implementation, operation, maintenance and exit/replacement costs, including internal resources."),
    question("e20","erp","accounting","Which statement about receivables and payables is correct?",["AR: customers owe us; AP: we owe suppliers","AR: we owe suppliers; AP: customers owe us","Both are customer debts only","Neither is used in ERP"],0,"Accounts receivable and payable represent opposite directions of amounts owed."),
    question("e21","erp","accounting","Why eliminate intercompany sales in consolidation?",["They are always fraudulent","They are internal to the group, not outside group revenue","They require no record","Consolidation never uses sales"],1,"Consolidated statements report one economic group and must avoid counting internal flows as external revenue."),
    question("e22","erp","commerce","Which integration control helps with repeated order-transfer messages?",["Create a new order on every retry","Remove order identifiers","Use a unique reference and safe duplicate handling","Ignore failed messages"],2,"Retries must not create duplicate business orders. Traceable identifiers and exception monitoring support reliability."),
    question("e23","erp","fraud","Which arrangement weakens segregation of duties?",["Independent payment approval","Separate master-data verification","Review of bank-change reports","One user creates suppliers, approves invoices and releases payment"],3,"Combining all powers permits one person to arrange unsupported payments. Separate rights and oversight reduce that opportunity."),
    question("e24","erp","marketing","Cost R100, selling price R125. What is gross margin?",["20%","25%","125%","80%"],0,"Profit R25 divided by selling price R125 is 20%. Dividing by cost gives the 25% markup."),
    question("e25","erp","rfid","Which is true of passive RFID tags?",["They require satellite positioning","They obtain operating energy from the reader signal","They always contain batteries","They guarantee perfect inventory records"],1,"Passive tags draw energy from a reader. Validated reads still need sound business processing."),
    question("e26","erp","stockout","Demand is 10 cases today and available stock is 6. Is this a stockout?",["No, because stock is positive","Only when accounting closes","Yes, availability cannot meet the required demand","Only if every product is unavailable"],2,"Stockout means insufficient stock when required, not necessarily zero inventory.")
  ];

  const MODULES = {
    isst: { code: "ISST7322", name: "Information Systems Strategy", short: "Strategy", accent: "#4fc1ff", rgb: "79,193,255", total: 340,
      intro: "Connect strategy, systems and organisational change. Explore the mechanisms, test the trade-offs and practise an answer you can defend.",
      labs: [["forces","five-forces.js","Competitive forces","Explore five industry pressures and strategic IS responses."],["triangle","constraints.js","Project trade-offs","Experiment with scope, time and budget while protecting quality."],["leadership","alignment.json","Alignment & flywheel","Unpack all six Luftman dimensions and Amazon's reinforcing loop."]],
      plan: ["Strategy triangle, business models and Five Forces; apply to one retailer.","Transformation, flywheel and hypercompetition; explain the mechanisms.","CIO, governance, EA and Luftman; recall six dimensions/five levels.","Professionalism and public/private comparison; write the leadership essay.","Project triangle, SDLC, agile and prototypes; draw and explain trade-offs.","Participation, ADKAR, MFA and XSS; create original examples.","Privacy, ethics and integrity; write an applied GlobalMart discussion.","Disruption, biometrics and AI; plan the 4/16/5 essay.","Sourcing, cloud service/deployment models and whole-life costs.","Knowledge, analytics, virtual teams and Web 2.0/blog comparisons.","E-government, enterprise integration and green IT; recall smaller topics.","Timed 2025 paper: 100 marks in two hours; review weak answers.","Timed 2024 paper: 120 marks in two hours; review essay structure.","Use 2023 questions and your error log; repair repeated gaps."] },
    erp: { code: "ERPL7312", name: "Enterprise Resource Planning", short: "ERP", accent: "#c3a6ff", rgb: "195,166,255", total: 360,
      intro: "Follow the data from customer demand to fulfilment and finance. Build forecasts, allocate production and understand the controls behind integrated operations.",
      labs: [["forecast","forecasting.csv","Sales forecasting","Edit real past-paper datasets and follow each calculation."],["costing","production-costs.js","Cost & product mix","Calculate manufacturing costs and proportional allocations."],["sap","sales-order.sap","SAP sales order","Inspect header and item fields, document flow and credit exposure."]],
      plan: ["ERP foundations, implementation success and scope control.","Forecasting: reconstruct the 2021 table independently.","Complete 2022 and 2024 forecasts; check promotion months and rounding.","Four functional areas and cross-functional process examples.","CRM tools, benefits and one-to-one marketing.","HR responsibilities, organisational objects and profile comparisons.","SaaS disadvantage and value analysis with time/cost calculations.","Sales-order fields and all three product allocation examples.","Cost elements, ERP benefits and total ownership cost.","Accounting, commerce, fraud, marketing, RFID and stockouts.","Timed 2021 practice using the two-hour working target.","Timed 2022 practice, closed book with a calculator.","Timed 2024 practice including the complete forecasting table.","Reattempt errors and retrieve all formulas/frameworks without notes."] }
  };

  const FORCES = [
    ["Rivalry", "Existing competitors", "Comparable providers compete over price, service and differentiation. Easy comparison and switching intensify pressure on margins.", "Link CRM, stock and fulfilment to create relevant offers and dependable service; use process information to control costs.", "GlobalMart can compete on reliable availability and service rather than price alone. Comparable online retailers are rivals, not automatically substitutes."],
    ["Entrants", "Potential competitors", "New providers threaten existing returns when capital, expertise, access and trust barriers are low. Digital channels may lower some entry costs.", "Build useful integrations, trusted service, accumulated expertise and participation that customers value. Do not assume software alone is an enduring barrier.", "An app provider's trusted integrations and active community can be harder to reproduce than its basic interface."],
    ["Substitutes", "Different solutions", "A different solution fulfils the same underlying need. Its price/performance can cap what customers will pay for the industry's offer.", "Monitor alternative behaviours and improve convenience, value and service relative to them. Consider a justified new service or business model.", "Cooking at home can substitute for a restaurant meal; renting or buying second-hand can substitute for a new clothing purchase."],
    ["Buyers", "Customer bargaining power", "Customers gain leverage through alternatives, price visibility, large purchases or low switching costs; concentrated buyers may negotiate harder.", "Use relevant service, personalisation and loyalty benefits; demonstrate outcomes and avoid excessive dependence on a few customers.", "An advertising agency uses campaign analytics to demonstrate value rather than competing solely on fees. Privacy and accurate measurement matter."],
    ["Suppliers", "Input-provider power", "Concentrated or scarce inputs and costly switching let providers negotiate prices or terms. Suppliers include platforms and service partners as well as materials.", "Use procurement and performance data to compare qualified suppliers, plan demand and build viable alternatives or portable integrations.", "A restaurant compares ingredient suppliers; an app provider assesses cloud portability while recognising continuing app-store dependence."]
  ];
  const LUFTMAN = [
    ["Communications", "Mutual understanding between business and IT: language, priorities, learning and access to the right people.", "Hold joint process reviews; ask each group to explain the other's goals and constraints."],
    ["Competency / value measurement", "Measures show the business contribution of IT as well as technical performance and support continuous improvement.", "Pair uptime with fulfilment accuracy, adoption and service outcomes; assign benefit owners."],
    ["Governance", "Priorities, investment decisions, resources and accountability are established through appropriate shared arrangements.", "Use a business–IT steering forum, transparent criteria and explicit decision rights."],
    ["Partnership", "Business and IT share trust, risks, responsibilities and ownership of outcomes rather than treating IT only as a supplier.", "Jointly sponsor initiatives and review both technology delivery and operational adoption."],
    ["Scope and architecture", "Systems enable integration, flexibility and strategic change through coherent business, information and technical arrangements.", "Agree common identifiers and reusable interfaces, supported by a target architecture and roadmap."],
    ["Skills", "People, culture, learning, leadership and change readiness support collaboration and adaptation.", "Build domain knowledge in technical teams, data literacy in the business and role-based change capability."]
  ];
  const FLYWHEEL = [
    ["Customer experience", "Reliable service, useful selection and attractive value encourage customers to return. Customer experience is the loop's recurring outcome."],
    ["Traffic", "A better experience attracts visits and demand. More relevant demand makes participation attractive to sellers."],
    ["Sellers", "More sellers can expand availability and variety, subject to marketplace quality and trust controls."],
    ["Selection", "Broader useful selection makes it easier to find a suitable product, improving customer experience and closing the main loop."],
    ["Scale & lower unit cost", "More volume can spread fixed costs and improve operational efficiency. This is an economy of scale, not the definition of a network effect."],
    ["Lower prices", "Lower costs can support lower prices, improving value and customer experience, which stimulates more traffic. Savings must actually reach the customer to reinforce this route."]
  ];
  const SAP_FIELDS = [
    ["Sold-to party","100014 · Retail HQ","header","Identifies the commercial customer placing the order and links customer master information. Head office may order for several branches."],
    ["Ship-to party","100027 · Receiving branch","header","Identifies the recipient or delivery location, supporting addressing and shipping determination. It can differ from sold-to."],
    ["PO Number","PO-2026-0481","header","Stores the customer's purchase-order reference for matching invoices, tracking enquiries and avoiding confusion with your own order number."],
    ["PO date","25 Oct 2026","header","Records the date on the customer's purchase order. It is distinct from pricing and requested delivery dates."],
    ["Requested delivery date","02 Nov 2026","header","States when the customer wants delivery. Scheduling and availability checks determine what can actually be confirmed."],
    ["Payment terms","Within 30 days","header","Defines when payment is due and any configured discount conditions, supporting receivables and collection."],
    ["Sales area","1000 / 10 / 00","header","Combines sales organisation, distribution channel and division to provide the commercial organisational context."],
    ["Pricing date","25 Oct 2026","header","Selects applicable pricing conditions according to configuration. It need not match every other document date."],
    ["Material","BAR-A","item","Product code linking the line to product master data, descriptions, units and relevant planning information."],
    ["Description","Cereal bar · original","item","Human-readable material identification. The material code is still the key product identifier."],
    ["Order quantity","100","item","Number of sales units requested. It affects availability, fulfilment and the calculated line value."],
    ["SU / Sales Unit","CS · cases","item","Specifies the sales unit. One case is not one individual bar; conversion needs a defined case size."],
    ["Net value","R19,000.00","item","Illustration: 100 cases × R200 less 5% = R19,000 before other applicable amounts. Net value is derived from quantity and pricing conditions."],
    ["Delivering plant","PL01","item","Identifies the organisational location supplying the goods, supporting availability and delivery planning."],
    ["Delivery block","None","item","A configured block prevents delivery until its underlying issue is resolved and the block is appropriately released."],
    ["Billing block","None","item","A configured block prevents billing until its issue is resolved. It has a different operational effect from a delivery block."]
  ];
  const PRESETS = {
    "2024": { actual:[45033,39956,37000,31000,42321,61456], old:[0,0,0,0,1245,0], growth:2.75, next:[0,0,2450,0,0,0], rounding:"none" },
    "2022": { actual:[52453,40453,38957,31367,35124,72849], old:[0,0,4200,0,0,0], growth:3, next:[0,3700,0,0,0,0], rounding:"10" },
    "2021": { actual:[45898,32453,37845,20763,25637,60894], old:[0,0,0,2500,0,0], growth:2, next:[3000,0,0,0,0,0], rounding:"none" }
  };
  const MONTHS = ["July","August","September","October","November","December"];
  const forecastPreset = year => ({ preset:year, rounding:PRESETS[year].rounding,
    rows:MONTHS.map((month,i) => ({ month, actual:String(PRESETS[year].actual[i]), old:String(PRESETS[year].old[i]), growth:String(PRESETS[year].growth), next:String(PRESETS[year].next[i]) })) });

  // ---------- Small pure functions: validation, mathematics and safe output ----------
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const h = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const rich = value => h(value).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`(.+?)`/g,"<code>$1</code>");
  const fmt = value => Number.isFinite(value) ? new Intl.NumberFormat("en-ZA",{ maximumFractionDigits:4 }).format(value) : "—";
  const money = value => Number.isFinite(value) ? new Intl.NumberFormat("en-ZA",{style:"currency",currency:"ZAR",maximumFractionDigits:2}).format(value) : "—";
  const numeric = (value, min = 0, max = 1e12) => {
    if (String(value).trim() === "") return null;
    const n = Number(value); return Number.isFinite(n) && n >= min && n <= max ? n : null;
  };
  const shuffle = items => {
    const copy = [...items];
    for (let i=copy.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [copy[i],copy[j]]=[copy[j],copy[i]]; }
    return copy;
  };
  const forecastMath = (actual, old, growth, next) => {
    const base=actual-old, increase=base*growth/100, projection=base+increase;
    return { base, increase, projection, forecast:projection+next };
  };
  const manufacturingMath = (materials, labour, overhead, units) => ({ total:materials+labour+overhead, unit:units>0?(materials+labour+overhead)/units:null });
  const allocationMath = (total, shares) => ({ allocations:shares.map(share=>total*share/100), shareTotal:shares.reduce((a,b)=>a+b,0), remainder:total*(100-shares.reduce((a,b)=>a+b,0))/100 });
  const creditMath = (limit,balance,order) => ({ available:limit-balance, exposure:balance+order, headroom:limit-balance-order });
  const rounded = n => labs.forecast.rounding==="10"?Math.round(n/10)*10:n;
  const priority = (module, marks) => marks>=40?"critical":marks>=(module==="isst"?30:25)?"high":marks>=(module==="isst"?20:10)?"medium":"low";
  const STORAGE_KEY = "studycode.workspace.v1";
  const freshLabs = () => ({forecast:forecastPreset("2024"), cost:{materials:"12000",labour:"4000",overhead:"3000",units:"100"},
    mix:{total:"10345",perCase:"",rows:[{name:"NGR-A",share:"45"},{name:"NGR-B",share:"39"}]}, triangle:{scope:100,time:100,cost:100}, credit:{limit:"50000",balance:"35000",order:"12000"}});
  let storageWorks=true, saved={};
  try { saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}"); if (!saved || saved.version!==1) saved={}; }
  catch { storageWorks=false; saved={}; }
  const state = {
    module:saved.module==="erp"?"erp":"isst", views:{isst:"overview",erp:"overview"}, tabs:{isst:["overview"],erp:["overview"]},
    read:Array.isArray(saved.read)?saved.read.filter(id=>typeof id==="string"):[],
    known:Array.isArray(saved.known)?saved.known.filter(id=>CARD_BANK.some(c=>c.id===id)):[],
    history:Array.isArray(saved.history)?saved.history.filter(x=>x && Number.isFinite(x.score) && Number.isFinite(x.total) && x.total>0).slice(-40):[]
  };
  let labs=freshLabs();
  // Corrupt or old local data cannot prevent a clean workspace from starting.
  if (saved.labs && typeof saved.labs==="object") {
    const candidate=saved.labs;
    if (candidate.forecast && PRESETS[candidate.forecast.preset] && Array.isArray(candidate.forecast.rows) && candidate.forecast.rows.length===6 && candidate.forecast.rows.every(r=>r && ["actual","old","growth","next"].every(k=>typeof r[k]==="string"))) {
      labs.forecast={preset:candidate.forecast.preset,rounding:candidate.forecast.rounding==="10"?"10":"none",rows:candidate.forecast.rows.map((r,i)=>({...r,month:MONTHS[i]}))};
    }
    for (const key of ["cost","credit"]) if (candidate[key] && Object.keys(labs[key]).every(k=>typeof candidate[key][k]==="string")) labs[key]={...candidate[key]};
    if (candidate.triangle && ["scope","time","cost"].every(k=>numeric(candidate.triangle[k],50,150)!==null)) labs.triangle={...candidate.triangle};
    if (candidate.mix && typeof candidate.mix.total==="string" && typeof candidate.mix.perCase==="string" && Array.isArray(candidate.mix.rows) && candidate.mix.rows.length>0 && candidate.mix.rows.length<=8 && candidate.mix.rows.every(r=>r && typeof r.name==="string" && typeof r.share==="string")) labs.mix=candidate.mix;
  }
  const sessions = {isst:{cards:{scope:"module",mode:"all",order:[],index:0,flipped:false},quiz:{scope:"module",count:"10",run:null}},erp:{cards:{scope:"module",mode:"all",order:[],index:0,flipped:false},quiz:{scope:"module",count:"10",run:null}}};
  let selectedForce=0, selectedFly=0, selectedSap=0, sidebarHidden=false, drawerOpen=false, searchItems=[];
  const persist = () => {
    try { localStorage.setItem(STORAGE_KEY,JSON.stringify({version:1,module:state.module,read:state.read,known:state.known,history:state.history,labs})); }
    catch { storageWorks=false; }
    $("#storageStatus").textContent=storageWorks?"Progress saved on this browser":"Session only · storage unavailable";
  };
  const announce = text => { $("#announcer").textContent=text; };
  const currentView = () => state.views[state.module];
  const files = module => [["overview","overview.md","Overview"],["lessons","lessons.md","Lesson library"],...MODULES[module].labs.map(([id,file,title])=>[id,file,title]),["cards","flashcards.json","Flashcards"],["quiz","assessment.test.js","Assessment"]];
  const file = (view,module=state.module) => files(module).find(f=>f[0]===view)||files(module)[0];
  const icon = filename => `<span class="file-icon ${h(filename.split('.').pop())}">${filename.endsWith(".md")?"M↓":filename.endsWith(".json")?"{}":filename.endsWith(".csv")?"▦":"JS"}</span>`;
  const pageHead = (eyebrow,title,lead) => `<header class="hero"><div><p class="eyebrow">${h(eyebrow)}</p><h1>${h(title)}</h1><p class="lead">${h(lead)}</p></div><span class="module-badge">${MODULES[state.module].code}</span></header>`;
  const button = (action,label,classes="",extra="") => `<button class="button ${classes}" data-action="${action}" ${extra}>${label}</button>`;
  const pill = l => `<span class="pill ${priority(state.module,l.marks)}">${priority(state.module,l.marks).toUpperCase()} · ${l.marks} marks</span>`;
  function renderChrome() {
    const m=MODULES[state.module], view=currentView(), activeFile=file(view);
    document.documentElement.style.setProperty("--accent",m.accent); document.documentElement.style.setProperty("--accent-rgb",m.rgb);
    document.title=`${m.code} · ${activeFile[2]} — StudyCode`;
    $("#sidebarModule").textContent=m.name;
    $$("[data-module]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.module===state.module)));
    $("#fileTree").innerHTML=files(state.module).map(([id,name])=>`<button class="file-link" data-nav="${id}" ${id===view?'aria-current="page"':''}>${icon(name)}${h(name)}</button>`).join("");
    $("#tabs").innerHTML=state.tabs[state.module].map(id=>`<div class="tab ${id===view?'active':''}"><button class="tab-open" data-nav="${id}" ${id===view?'aria-current="page"':''}>${icon(file(id)[1])} ${h(file(id)[1])}</button><button class="icon-button" data-close-tab="${id}" aria-label="Close ${h(file(id)[1])}"><svg><use href="#i-close"/></svg></button></div>`).join("");
    $("#breadcrumbs").textContent=`workspace / ${m.code} / ${activeFile[1]}`;
    $("#statusModule").textContent=m.code; $("#statusView").textContent=activeFile[2];
    const count=LESSONS[state.module].filter(l=>state.read.includes(`${state.module}-${l.id}`)).length;
    $("#readingCount").textContent=`${count} / ${LESSONS[state.module].length}`;
    $("#readingProgress").max=LESSONS[state.module].length; $("#readingProgress").value=count;
    $$("[data-activity]").forEach(b=>b.classList.toggle("active",b.dataset.activity===view || (b.dataset.activity==="labs" && m.labs.some(l=>l[0]===view)) || (b.dataset.activity==="explorer" && ["overview","lessons"].includes(view))));
    $("#storageStatus").textContent=storageWorks?"Progress saved on this browser":"Session only · storage unavailable";
  }
  function navigate(view, focus=true) {
    if (!files(state.module).some(f=>f[0]===view)) view="overview";
    state.views[state.module]=view;
    if (!state.tabs[state.module].includes(view)) state.tabs[state.module].push(view);
    renderChrome(); renderView(); setDrawer(false); $("#main").scrollTop=0;
    if (focus) $("#main").focus({preventScroll:true});
  }
  function switchModule(module) {
    if (!MODULES[module]) return;
    state.module=module; persist(); navigate(state.views[module]); announce(`${MODULES[module].name} workspace opened`);
  }
  function openLesson(module,id) {
    if (module!==state.module) switchModule(module);
    navigate("lessons");
    const el=$(`[data-lesson="${id}"]`); if (el) { el.open=true; el.scrollIntoView({block:"start"}); $("summary",el).focus(); }
  }
  function renderView() {
    const renderers={overview:renderOverview,lessons:renderLessons,forces:renderForces,triangle:renderTriangle,leadership:renderLeadership,forecast:renderForecast,costing:renderCosting,sap:renderSap,cards:renderCards,quiz:renderQuiz};
    $("#main").innerHTML=`<div class="page">${renderers[currentView()]()}</div>`;
    ({forces:updateForce,triangle:updateTriangle,leadership:updateFly,forecast:updateForecast,costing:()=>{updateCost();updateMix();},sap:()=>{updateSap();updateCredit();}}[currentView()]||(()=>{}))();
  }
  function renderOverview() {
    const m=MODULES[state.module], rows=LESSONS[state.module], read=rows.filter(l=>state.read.includes(`${state.module}-${l.id}`)).length;
    const history=state.history.filter(r=>r.module===state.module && r.scope!=="both");
    const best=history.reduce((a,b)=>!a||b.score/b.total>a.score/a.total?b:a,null);
    return pageHead(`// ${m.code} / learning environment`,m.name,m.intro)+`
      <div class="grid three"><div class="panel"><span class="stat">${read}<span class="muted"> / ${rows.length}</span></span><span class="stat-label">Lessons marked read</span></div><div class="panel"><span class="stat">${CARD_BANK.filter(c=>c.module===state.module).length}</span><span class="stat-label">Terminology & retrieval cards</span></div><div class="panel"><span class="stat">${best?`${Math.round(100*best.score/best.total)}%`:"—"}</span><span class="stat-label">${best?`Best module quiz · ${best.score}/${best.total}`:"No module quiz completed yet"}</span></div></div>
      <div class="section-heading"><h2>Learn by doing</h2><span class="comment">// select a lab to begin</span></div>
      <div class="grid three">${m.labs.map(([id,,title,desc],i)=>`<button class="tool-card" data-nav="${id}"><span class="tool-number">0${i+1} / INTERACTIVE</span><h3>${h(title)}</h3><p>${h(desc)}</p><span class="arrow">Open lab →</span></button>`).join("")}</div>
      <div class="section-heading"><h2>Complete topic map</h2>${button("navigate-lessons","Read lessons →")}</div>
      <p class="small muted">Guide analysis: ${m.total} marks across three supplied papers. Historical weighting guides revision; it does not predict the next paper.</p>
      <div class="panel lesson-index">${rows.map((l,i)=>`<button data-open-lesson="${l.id}"><span class="tick">${state.read.includes(`${state.module}-${l.id}`)?"✓":String(i+1).padStart(2,"0")}</span><span class="lesson-title">${h(l.title)}</span>${pill(l)}</button>`).join("")}</div>
      <div class="section-heading"><h2>Your 14-day route</h2><span class="small muted">Recall first. Check second. Correct third.</span></div><div class="study-plan">${m.plan.map(x=>`<div>${h(x)}</div>`).join("")}</div>
      <div class="notice"><strong>Turn understanding into marks.</strong> Use Point → Explain → Apply → Consequence. Give requested examples. For calculations show formula, substitution, working and units. Practise written answers as well as the recognition-based quizzes.</div>
      <p class="small muted">Source: the supplied ${m.code} Master Exam Study Guide. Lessons are adapted study notes; examples are illustrative unless labelled with a paper year. Progress is local to this browser; nothing is sent to a server.</p>`;
  }
  function renderLessons() {
    return pageHead("// knowledge base","Read it. Explain it. Apply it.","Every topic from the supplied guide, with a worked application, exam method and a retrieval check.")+`
      <div class="toolbar"><label class="sr-only" for="lessonFilter">Filter this module's lessons</label><input id="lessonFilter" type="search" placeholder="Filter by concept, term or example…"></div>
      <p class="small muted" id="lessonCount">${LESSONS[state.module].length} lessons · mark reading separately from mastery</p>
      ${LESSONS[state.module].map((l,i)=>`<details class="lesson" data-lesson="${l.id}" ${i===0?"open":""}><summary>${String(i+1).padStart(2,"0")} &nbsp; ${h(l.title)} ${pill(l)}</summary><div class="lesson-body"><ul>${l.points.map(p=>`<li>${rich(p)}</li>`).join("")}</ul><div class="example"><h3>Worked application</h3><p>${h(l.example)}</p></div><h3>Exam approach</h3><p>${h(l.exam)}</p><details class="recall"><summary>Recall check: ${h(l.question)}</summary><p>${h(l.answer)}</p></details>${button("mark-read",state.read.includes(`${state.module}-${l.id}`)?"✓ Marked read · undo":"Mark lesson read","",`data-id="${l.id}" aria-pressed="${state.read.includes(`${state.module}-${l.id}`)}"`)}</div></details>`).join("")}
      <p class="empty" id="noLessons" hidden>No matching lessons. Try a broader term.</p>`;
  }
  function renderForces() {
    return pageHead("// strategic analysis / porter","Where does the pressure come from?","Select each force to connect its economic mechanism with an information-systems response.")+`
      <div class="model-layout"><div class="model-stage"><div class="forces" role="group" aria-label="Porter's Five Forces"><svg class="force-lines" viewBox="0 0 300 300" preserveAspectRatio="none" aria-hidden="true"><path d="M150 50V250M50 150H250"/></svg>${FORCES.map((f,i)=>`<button class="force-node" data-force="${i}" aria-pressed="${i===selectedForce}"><span>${i===0?"INDUSTRY":"PRESSURE"}</span>${f[0]}</button>`).join("")}</div></div><section class="panel detail-panel" id="forceDetail" aria-live="polite" aria-label="Selected force explanation"></section></div>
      <div class="notice"><strong>Exam distinction:</strong> a rival sells a comparable offer; a substitute satisfies the underlying need differently. Always explain the mechanism, case evidence, IS action and business consequence.</div>`;
  }
  function updateForce() {
    const f=FORCES[selectedForce]; $$("[data-force]").forEach(b=>b.setAttribute("aria-pressed",String(Number(b.dataset.force)===selectedForce)));
    $("#forceDetail").innerHTML=`<div class="detail-kicker">${h(f[1])}</div><h2>${h(f[0])}</h2><p>${h(f[2])}</p><h3>Strategic IS response</h3><p>${h(f[3])}</p><h3>Applied example</h3><p>${h(f[4])}</p>`;
  }
  function renderTriangle() {
    return pageHead("// project delivery / constraints","Something changes. What moves?","Adjust each constraint relative to a baseline. Diagnose pressure and choose an explicit trade-off.")+`
      <div class="model-layout"><div class="panel"><svg class="triangle-svg" viewBox="0 0 420 300" role="img" aria-labelledby="triangleTitle"><title id="triangleTitle">Scope, time and cost surround quality. All constraints are interdependent.</title><polygon points="210,48 65,252 355,252"/><text x="210" y="27">SCOPE</text><text x="57" y="280">TIME</text><text x="359" y="280">COST</text><text x="210" y="178" class="quality">QUALITY</text></svg><p class="small muted">Quality and mandatory acceptance standards stay explicit. More staff do not guarantee faster delivery.</p></div><div class="panel">${[["scope","Scope / required work"],["time","Time / available schedule"],["cost","Cost / available budget"]].map(([k,t])=>`<div class="slider-group"><label for="tri-${k}">${t}<output id="tri-out-${k}">${labs.triangle[k]}%</output></label><input type="range" id="tri-${k}" data-triangle="${k}" min="50" max="150" step="5" value="${labs.triangle[k]}"></div>`).join("")}<div class="toolbar">${button("triangle-scenario","More scope","",'data-scenario="scope"')}${button("triangle-scenario","Earlier deadline","",'data-scenario="time"')}${button("triangle-scenario","Less budget","",'data-scenario="cost"')}${button("triangle-reset","Reset")}</div></div></div>
      <div class="panel" style="margin-top:20px" aria-live="polite"><h3 id="triangleState"></h3><div class="pressure-track" aria-hidden="true"><span id="pressureBar"></span></div><p id="triangleAdvice"></p><p class="small muted" id="triangleIndex"></p></div>
      <div class="notice warning">This is an illustrative sensitivity model, not a project estimate or quality score. The pressure index assumes time and budget provide flexible capacity; real dependencies, scarce skills and coordination can invalidate that assumption. Use it to explain trade-offs, then assess feasibility.</div>`;
  }
  function updateTriangle() {
    const t=labs.triangle, index=t.scope*10000/(t.time*t.cost);
    for (const k of ["scope","time","cost"]) $("#tri-out-"+k).textContent=`${t[k]}%`;
    $("#pressureBar").style.width=`${Math.min(100,index/2)}%`;
    $("#pressureBar").style.background=index>108?"var(--red)":"var(--green)";
    $("#triangleState").textContent=index>108?"Delivery pressure · negotiate a trade-off":index<92?"Additional capacity or flexibility":"Constraints near the illustrative baseline";
    $("#triangleAdvice").textContent=index>108?"Prioritise essential scope, fund feasible capacity or negotiate the deadline. Escalate the conflict before testing, security or acceptance standards are squeezed.":"Use the available flexibility for risk reduction, validation or earlier value delivery. Confirm dependencies and skills; a favourable index does not guarantee quality or success.";
    $("#triangleIndex").textContent=`Illustrative pressure index: ${fmt(index)} (baseline 100). Scope × 10,000 ÷ (time × budget).`;
  }
  function renderLeadership() {
    return pageHead("// leadership / reinforcing systems","Align the organisation. Reinforce value.","Inspect all six Luftman dimensions, then trace the mechanisms behind Amazon's flywheel.")+`
      <div class="section-heading"><h2>Luftman: six alignment dimensions</h2><span class="small muted">Assess each with business and IT evidence</span></div>
      ${LUFTMAN.map((d,i)=>`<details class="framework" ${i===0?"open":""}><summary>${i+1}. ${h(d[0])}</summary><div class="framework-body"><p>${h(d[1])}</p><strong>Improvement action</strong><p>${h(d[2])}</p></div></details>`).join("")}
      <div class="maturity">${["Initial / ad hoc","Committed","Established / focused","Improved / managed","Optimised"].map((t,i)=>`<div><strong>${i+1}</strong>${t}</div>`).join("")}</div>
      <p class="small muted">Maturity can differ by dimension. Use evidence to identify gaps, assign improvement owners and reassess; do not assume buying newer technology creates alignment.</p>
      <div class="section-heading"><h2>Amazon's flywheel</h2><span class="comment">// reinforcing feedback, not a linear checklist</span></div>
      <div class="formula">Experience → Traffic → Sellers → Selection → Experience ↻<br>Scale → Lower unit cost → Lower prices → Experience ↻</div>
      <div class="flywheel" role="group" aria-label="Flywheel mechanisms">${FLYWHEEL.map((f,i)=>`<button class="fly-step" data-fly="${i}" aria-pressed="${i===selectedFly}"><span>0${i+1} →</span>${h(f[0])}</button>`).join("")}</div><section class="panel" id="flyDetail" aria-live="polite"></section>
      <div class="notice">More participation can create a network effect; more volume can create economies of scale. Keep those mechanisms distinct and explain how the resulting benefit feeds back into customer experience.</div>`;
  }
  function updateFly() { const f=FLYWHEEL[selectedFly]; $$("[data-fly]").forEach(b=>b.setAttribute("aria-pressed",String(Number(b.dataset.fly)===selectedFly))); $("#flyDetail").innerHTML=`<h3>${h(f[0])}</h3><p>${h(f[1])}</p>`; }

  // ---------- ERP labs: inputs stay mounted while calculated cells update ----------
  const numberField = (id,label,value,attrs="") => `<label class="field" for="${id}">${label}<input type="number" id="${id}" value="${h(value)}" min="0" max="1000000000000" step="any" inputmode="decimal" ${attrs}></label>`;
  function markValidity(input, valid) { if(input) input.setAttribute("aria-invalid",String(!valid)); }
  function renderForecast() {
    const f=labs.forecast;
    return pageHead("// demand planning / live calculation","Normalise. Grow. Promote.","Edit the six-month table. Each row recalculates immediately, preserving full internal precision.")+`
      <div class="formula">Base = Actual − Old promotion<br>Growth amount = Base × Growth % ÷ 100<br>Base projection = Base + Growth amount<br>Final forecast = Base projection + New promotion</div>
      <div class="toolbar"><label for="forecastPreset">Paper dataset <select id="forecastPreset">${Object.keys(PRESETS).sort().reverse().map(y=>`<option ${f.preset===y?"selected":""}>${y}</option>`).join("")}</select></label><label for="forecastRounding">Output rounding <select id="forecastRounding"><option value="none" ${f.rounding==="none"?"selected":""}>No calculation rounding</option><option value="10" ${f.rounding==="10"?"selected":""}>Nearest 10</option></select></label>${button("forecast-reset","Reset dataset","spacer")}${button("forecast-export","Export CSV")}</div>
      <p class="small muted">All quantities use the same sales unit. Horizontal scrolling is available for the full calculation table. Changing datasets replaces the current table.</p>
      <div class="table-scroll" tabindex="0" role="region" aria-label="Editable sales forecast table"><table class="forecast-table"><thead><tr>${["Month","Actual sales","Old promotion","Normalised base","Growth %","Growth amount","Base projection","New promotion","Final forecast"].map(x=>`<th scope="col">${x}</th>`).join("")}</tr></thead><tbody>${f.rows.map((r,i)=>`<tr><th scope="row">${r.month}</th>${["actual","old"].map(k=>`<td><input type="number" min="0" max="1000000000000" step="any" inputmode="decimal" value="${h(r[k])}" data-forecast="${k}" data-row="${i}" aria-label="${r.month} ${k=== 'actual'?'historical actual sales':'old promotional uplift'}" aria-describedby="forecastErrors"></td>`).join("")}<td class="calculated" id="fc-${i}-base"></td><td><input type="number" min="-100" max="10000" step="any" inputmode="decimal" value="${h(r.growth)}" data-forecast="growth" data-row="${i}" aria-label="${r.month} growth percentage" aria-describedby="forecastErrors"></td><td class="calculated" id="fc-${i}-increase"></td><td class="calculated" id="fc-${i}-projection"></td><td><input type="number" min="0" max="1000000000000" step="any" inputmode="decimal" value="${h(r.next)}" data-forecast="next" data-row="${i}" aria-label="${r.month} new promotional uplift" aria-describedby="forecastErrors"></td><td class="calculated" id="fc-${i}-forecast"></td></tr>`).join("")}</tbody></table></div>
      <div class="notice error" id="forecastErrors" role="status" hidden></div><div class="panel totals" aria-live="polite" aria-atomic="true"><div><output id="forecastTotal"></output><span>Total displayed forecasts</span></div><div><output id="forecastRaw"></output><span>Total unrounded forecasts</span></div><div><output id="forecastBase"></output><span>Total normalised historical base</span></div></div>
      <div class="notice">Nearest-10 mode rounds only the displayed projection and final forecast in each row; totals add those displayed final forecasts. Base and growth columns show up to four decimals. With no calculation rounding, arithmetic retains full precision and displays up to four decimals. CSV includes unrounded results for checking.</div>
      <p class="small muted">2024 check: November = 42,205.59; September = 40,467.50. 2022 check: August unrounded = 45,366.59, nearest 10 = 45,370.</p>`;
  }
  function validatedForecast() {
    const errors=[];
    const results=labs.forecast.rows.map((r,i)=>{
      const values={};
      for (const key of ["actual","old","growth","next"]) {
        values[key]=numeric(r[key],key==="growth"?-100:0,key==="growth"?10000:1e12);
        markValidity($(`[data-forecast="${key}"][data-row="${i}"]`),values[key]!==null);
      }
      if(Object.values(values).includes(null)) { errors.push(`${r.month}: enter finite numbers; quantities must be 0–1 trillion and growth −100% to 10,000%.`); return null; }
      if(values.old>values.actual) { markValidity($(`[data-forecast="old"][data-row="${i}"]`),false); errors.push(`${r.month}: old uplift cannot exceed historical actual sales.`); return null; }
      return {...values,...forecastMath(values.actual,values.old,values.growth,values.next)};
    });
    return {results,errors};
  }
  function updateForecast() {
    const {results,errors}=validatedForecast();
    results.forEach((r,i)=>["base","increase","projection","forecast"].forEach(k=>$("#fc-"+i+"-"+k).textContent=r?fmt(["projection","forecast"].includes(k)?rounded(r[k]):r[k]):"—"));
    $("#forecastErrors").hidden=errors.length===0; $("#forecastErrors").textContent=errors.join(" ");
    $("#forecastTotal").textContent=errors.length?"—":fmt(results.reduce((a,r)=>a+rounded(r.forecast),0));
    $("#forecastRaw").textContent=errors.length?"—":fmt(results.reduce((a,r)=>a+r.forecast,0));
    $("#forecastBase").textContent=errors.length?"—":fmt(results.reduce((a,r)=>a+r.base,0));
    $('[data-action="forecast-export"]').disabled=errors.length>0;
  }
  function renderCosting() {
    return pageHead("// production planning / cost & allocation","Know the cost. Allocate the plan.","Use production totals for costing and explicit product shares for disaggregation. Results preserve their units.")+`
      <div class="grid two"><section class="panel"><h2>Manufacturing costs</h2><p class="small muted">Enter batch totals in rand, and output in cases. Example batch: 100 cases.</p><div class="cost-fields">${[["materials","Direct materials (R)"],["labour","Direct labour (R)"],["overhead","Manufacturing overhead (R)"],["units","Cases produced"]].map(([k,label])=>numberField("cost-"+k,label,labs.cost[k],`data-cost="${k}" aria-describedby="costError"`)).join("")}</div><div id="costError" class="notice error" role="status" hidden></div><div class="cost-bar" aria-hidden="true"><span id="bar-materials"></span><span id="bar-labour"></span><span id="bar-overhead"></span></div><p class="legend">Blue / purple: materials · Pink: labour · Green: factory overhead</p><div class="totals" aria-live="polite"><div><output id="costTotal"></output><span>Batch manufacturing cost</span></div><div><output id="costUnit"></output><span>Cost per case</span></div></div><div class="toolbar">${button("cost-reset","Reset cost example")}</div></section>
      <section class="panel"><h2>Understand the inputs</h2><p><strong>Direct materials:</strong> ingredients and attributable packaging.</p><p><strong>Direct labour:</strong> traceable production work. Hours × hourly rate gives labour cost.</p><p><strong>Overhead:</strong> indirect factory costs such as supervision, rent and depreciation. Applied overhead = allocation rate × base used.</p><div class="formula">Total = Materials + Labour + Overhead<br>Per case = Total ÷ Cases produced</div><div class="notice warning">Selling and general administration are separate from manufacturing overhead. Zero output makes cost per case undefined. This lab does not add tax, selling expenses or a profit margin.</div></section></div>
      <div class="section-heading"><h2>Product mix allocations</h2>${button("mix-reset","Reset 2024 example")}</div>
      <section class="panel"><div class="grid two">${numberField("mixTotal","Total group plan (cases)",labs.mix.total,'data-mix-total aria-describedby="mixMessage"')}<label class="field" for="perCase">Individual units per case (optional)<input id="perCase" type="number" min="1" max="1000000" step="1" value="${h(labs.mix.perCase)}" data-per-case aria-describedby="mixMessage"><span>Leave empty to keep results in cases.</span></label></div>
      <div class="table-scroll" tabindex="0" role="region" aria-label="Product shares and allocations"><table class="mix-table"><thead><tr><th scope="col">Product</th><th scope="col">Share %</th><th scope="col">Cases</th><th scope="col">Individual units</th><th scope="col">Edit</th></tr></thead><tbody>${labs.mix.rows.map((r,i)=>`<tr><td><input type="text" maxlength="40" value="${h(r.name)}" data-mix-name="${i}" aria-label="Product ${i+1} name"></td><td><input type="number" min="0" max="100" step="any" value="${h(r.share)}" data-mix-share="${i}" aria-label="Product ${i+1} share percent" aria-describedby="mixMessage"></td><td class="calculated" id="mix-cases-${i}"></td><td id="mix-units-${i}"></td><td>${button("mix-remove","Remove","",`data-row="${i}" aria-label="Remove product ${i+1}" ${labs.mix.rows.length===1?"disabled":""}`)}</td></tr>`).join("")}</tbody></table></div>
      <div class="toolbar">${button("mix-add","+ Add product","",labs.mix.rows.length>=8?"disabled":"")}<span class="small muted">Up to eight products. Shares are never automatically normalised.</span></div><div class="notice" id="mixMessage" role="status"></div><div class="formula">Allocation = Group cases × Share % ÷ 100<br>Individual units = Allocated cases × Units per case</div><p class="small muted" style="margin-top:12px">Fractional cases are exact mathematical allocations. Agree a feasible whole-case plan separately; this tool does not silently round or optimise profit.</p></section>`;
  }
  function updateCost() {
    const c=labs.cost, values={};
    for(const k of Object.keys(c)) { values[k]=numeric(c[k]); markValidity($("#cost-"+k),values[k]!==null); }
    const invalid=Object.values(values).includes(null), result=invalid?null:manufacturingMath(values.materials,values.labour,values.overhead,values.units);
    $("#costError").hidden=!invalid; $("#costError").textContent="Enter finite, non-negative totals and output (maximum 1 trillion).";
    $("#costTotal").textContent=result?money(result.total):"—"; $("#costUnit").textContent=result?(result.unit===null?"Undefined · 0 cases":money(result.unit)):"—";
    for(const k of ["materials","labour","overhead"]) $("#bar-"+k).style.width=`${result&&result.total>0?values[k]/result.total*100:0}%`;
  }
  function updateMix() {
    const m=labs.mix, total=numeric(m.total), shares=m.rows.map(r=>numeric(r.share,0,100));
    const conversion=m.perCase.trim()===""?null:numeric(m.perCase,1,1e6), conversionValid=m.perCase.trim()===""||(conversion!==null && Number.isInteger(conversion));
    markValidity($("#mixTotal"),total!==null); markValidity($("#perCase"),conversionValid);
    shares.forEach((s,i)=>markValidity($(`[data-mix-share="${i}"]`),s!==null));
    const invalid=total===null||shares.includes(null)||!conversionValid, result=invalid?null:allocationMath(total,shares);
    m.rows.forEach((r,i)=>{ $("#mix-cases-"+i).textContent=result?fmt(result.allocations[i]):"—"; $("#mix-units-"+i).textContent=result&&conversion!==null?fmt(result.allocations[i]*conversion):"—"; });
    const msg=$("#mixMessage"); msg.className=`notice ${invalid?"error":result.shareTotal>100.0000001?"warning":""}`;
    msg.textContent=invalid?"Enter a non-negative finite group plan, shares from 0% to 100%, and either no case conversion or a whole number from 1 to 1,000,000.":Math.abs(result.shareTotal-100)<1e-7?"Shares total 100%. The original group plan is fully allocated.":result.shareTotal<100?`Shares total ${fmt(result.shareTotal)}%. Unallocated: ${fmt(100-result.shareTotal)}% = ${fmt(result.remainder)} cases. Original shares are preserved.`:`Shares total ${fmt(result.shareTotal)}%. Overallocated by ${fmt(result.shareTotal-100)}% = ${fmt(-result.remainder)} cases. Reduce shares to obtain a feasible allocation.`;
  }
  function renderSap() {
    const group=kind=>SAP_FIELDS.map((f,i)=>f[2]===kind?`<button class="sap-field" data-sap="${i}" aria-pressed="${i===selectedSap}" aria-controls="sapDetail"><span>${f[0]}</span><strong>${h(f[1])}</strong></button>`:"").join("");
    return pageHead("// order-to-cash / field explorer","One order. Many operational decisions.","Hover, focus or click a field to inspect its purpose. This teaching diagram is inspired by SAP; it is not a live SAP transaction.")+`
      <div class="model-layout"><div><div class="sap-toolbar">Standard Order · Illustrative training record</div><div class="sap-form"><h3>Header data</h3><div class="sap-fields">${group("header")}</div><div class="sap-divider">ITEM 10 / PRODUCT & FULFILMENT</div><div class="sap-fields">${group("item")}</div></div></div><section class="panel detail-panel" id="sapDetail" aria-label="Field explanation"></section></div>
      <div class="process-flow" aria-label="Order-to-cash sequence">${["Quotation →","Order →","Checks →","Delivery →","Invoice →","Payment"].map(s=>`<span>${s}</span>`).join("")}</div>
      <div class="section-heading"><h2>Simplified credit check</h2>${button("credit-reset","Reset credit example")}</div><div class="panel"><div class="grid three">${[["limit","Credit limit (R)"],["balance","Existing balance (R)"],["order","New order (R)"]].map(([k,label])=>numberField("credit-"+k,label,labs.credit[k],`data-credit="${k}" aria-describedby="creditMessage"`)).join("")}</div><div class="notice" id="creditMessage" role="status"></div><div class="totals" aria-live="polite"><div><output id="creditAvailable"></output><span>Available before new order</span></div><div><output id="creditExposure"></output><span>New total exposure</span></div><div><output id="creditHeadroom"></output><span>Headroom after new order</span></div></div></div><p class="small muted" style="margin-top:15px">Exposure = balance + new order. Actual SAP credit management can consider additional configured commitments. Passing this arithmetic check is not approval to ship.</p>`;
  }
  function updateSap() {
    const f=SAP_FIELDS[selectedSap]; $$("[data-sap]").forEach(b=>b.setAttribute("aria-pressed",String(Number(b.dataset.sap)===selectedSap)));
    $("#sapDetail").innerHTML=`<div class="detail-kicker">${f[2]} information</div><h2>${h(f[0])}</h2><div class="formula">${h(f[1])}</div><h3>Operational purpose</h3><p>${h(f[3])}</p><p class="small muted">Keyboard: Tab between fields; Enter or Space selects. The example values are illustrative and the credit calculator below is independent of this record.</p>`;
  }
  function updateCredit() {
    const c=labs.credit, values={}; for(const k of Object.keys(c)) { values[k]=numeric(c[k]);markValidity($("#credit-"+k),values[k]!==null); }
    const invalid=Object.values(values).includes(null), r=invalid?null:creditMath(values.limit,values.balance,values.order), msg=$("#creditMessage");
    msg.className=`notice ${invalid?"error":r.headroom<0?"warning":""}`;
    msg.textContent=invalid?"Enter finite non-negative amounts (maximum R1 trillion each).":r.headroom<0?`The new exposure exceeds the limit by ${money(-r.headroom)}. Follow the configured credit review/block procedure.`:`Within the simplified limit, leaving ${money(r.headroom)} headroom after the new order.`;
    $("#creditAvailable").textContent=r?money(r.available):"—"; $("#creditExposure").textContent=r?money(r.exposure):"—"; $("#creditHeadroom").textContent=r?money(r.headroom):"—";
  }

  // ---------- Retrieval tools: separate in-memory sessions for both modules ----------
  function cardDeck() {
    const c=sessions[state.module].cards, eligible=CARD_BANK.filter(x=>(c.scope==="both"||x.module===state.module)&&(c.mode!=="unlearned"||!state.known.includes(x.id)));
    const ids=eligible.map(x=>x.id);
    c.order=[...c.order.filter(id=>ids.includes(id)),...ids.filter(id=>!c.order.includes(id))];
    c.index=Math.max(0,Math.min(c.index,c.order.length-1)); return c.order.map(id=>CARD_BANK.find(x=>x.id===id));
  }
  function renderCards() {
    const c=sessions[state.module].cards, deck=cardDeck(), card=deck[c.index];
    return pageHead("// active recall / flashcards","Recall before you reveal.","Say the answer aloud, flip to check, then mark it learned when you can explain it independently.")+`
      <div class="toolbar"><label for="cardScope">Deck <select id="cardScope"><option value="module" ${c.scope==="module"?"selected":""}>Current module</option><option value="both" ${c.scope==="both"?"selected":""}>Both modules</option></select></label><label for="cardMode">Show <select id="cardMode"><option value="all" ${c.mode==="all"?"selected":""}>All cards</option><option value="unlearned" ${c.mode==="unlearned"?"selected":""}>Not learned yet</option></select></label>${button("cards-shuffle","Shuffle","spacer")}${button("cards-reset","Reset this deck's learned marks")}</div>
      ${card?`<div class="flash-wrap"><button id="flashcard" class="flashcard ${c.flipped?"flipped":""}" data-action="cards-flip" aria-pressed="${c.flipped}" aria-label="${h(c.flipped?card.back+'. Show question':card.front+'. Show answer')}"><span class="flash-inner"><span class="flash-face flash-front" aria-hidden="${c.flipped}"><span class="flash-tag">${MODULES[card.module].code} / retrieval</span><strong>${h(card.front)}</strong><span class="flash-hint">Click or press Enter / Space to reveal</span></span><span class="flash-face flash-back" aria-hidden="${!c.flipped}"><span class="flash-tag">Answer / explanation</span><strong>${h(card.back)}</strong><span class="flash-hint">Click to return to the question</span></span></span></button></div><div class="toolbar card-controls">${button("cards-prev","← Previous")}<span class="card-position" role="status">${c.index+1} / ${deck.length}</span>${button("cards-next","Next →")}${button("cards-known",state.known.includes(card.id)?"✓ Learned · undo":"Mark learned",state.known.includes(card.id)?"success":"primary",`aria-pressed="${state.known.includes(card.id)}"`)}</div><p class="small muted" style="text-align:center">Left / right arrow: change card · Learned marks are self-assessment, not an exam prediction.</p>`:`<div class="panel empty"><h2>All cards in this selection are learned.</h2><p>Switch to All cards or reset the deck's learned marks to review them again.</p></div>`}`;
  }
  function moveCard(direction) { const c=sessions[state.module].cards, deck=cardDeck(); if(!deck.length)return; c.index=(c.index+direction+deck.length)%deck.length;c.flipped=false;renderView();$("#flashcard").focus({preventScroll:true}); }
  function quizPool(scope) { return QUESTIONS.filter(q=>scope==="both"||q.module===state.module); }
  function startQuiz(ids=null) {
    const q=sessions[state.module].quiz; let pool;
    if(ids) pool=QUESTIONS.filter(x=>ids.includes(x.id));
    else { const available=quizPool(q.scope), count=q.count==="all"?available.length:Math.min(Number(q.count),available.length);
      pool=q.scope==="both"&&count<available.length?shuffle([...shuffle(available.filter(x=>x.module==="isst")).slice(0,Math.ceil(count/2)),...shuffle(available.filter(x=>x.module==="erp")).slice(0,Math.floor(count/2))]):shuffle(available).slice(0,count);
    }
    q.run={items:shuffle(pool).map(x=>({id:x.id,choices:shuffle([0,1,2,3])})),answers:Array(pool.length).fill(null),index:0,complete:false,recorded:false,scope:q.scope};
    renderView(); $("#main").focus({preventScroll:true});
  }
  function quizScore(run) { return run.items.reduce((score,item,i)=>score+(run.answers[i]===QUESTIONS.find(q=>q.id===item.id).correct?1:0),0); }
  function renderQuiz() {
    const session=sessions[state.module].quiz, r=session.run;
    const head=pageHead("// assessment / feedback loop","Test the mechanism, not the label.","Original practice questions cover both guides. Each answer receives an explanation; written exam practice remains essential.");
    if(!r) return head+`<div class="panel"><h2>Configure a practice run</h2><p class="muted">${QUESTIONS.filter(q=>q.module==="isst").length} strategy questions · ${QUESTIONS.filter(q=>q.module==="erp").length} ERP questions. Questions and option order are shuffled.</p><div class="toolbar"><label for="quizScope">Coverage <select id="quizScope"><option value="module" ${session.scope==="module"?"selected":""}>Current module</option><option value="both" ${session.scope==="both"?"selected":""}>Both modules</option></select></label><label for="quizCount">Length <select id="quizCount">${["10","20","all"].map(n=>`<option value="${n}" ${session.count===n?"selected":""}>${n==="all"?"Entire selected bank":n+" questions"}</option>`).join("")}</select></label></div>${button("quiz-start","Start assessment →","primary")}<div class="notice">One answer per question. Feedback appears immediately and the score cannot increase through repeated clicks. Both-module samples include questions from each module. Switching workspaces preserves each module's current run.</div></div>`;
    if(r.complete) return head+renderQuizSummary(r);
    const item=r.items[r.index], q=QUESTIONS.find(x=>x.id===item.id), answer=r.answers[r.index], answered=answer!==null, score=quizScore(r), completed=r.answers.filter(x=>x!==null).length;
    return head+`<div class="quiz-top"><span>${MODULES[q.module].code} · QUESTION ${r.index+1} / ${r.items.length}</span><span>Score ${score} / ${completed} answered</span></div><progress value="${completed}" max="${r.items.length}" aria-label="Questions answered"></progress><section class="panel" style="margin-top:20px"><h2 class="question">${h(q.prompt)}</h2><div class="answers" role="group" aria-label="Answer choices">${item.choices.map((choice,i)=>`<button class="answer ${answered?(choice===q.correct?"correct":choice===answer?"incorrect":""):""}" data-answer="${choice}" ${answered?"disabled":""}><span class="letter">${String.fromCharCode(65+i)}</span><span>${h(q.options[choice])}${answered&&choice===q.correct?" · ✓ Correct answer":answered&&choice===answer?" · ✕ Your answer":""}</span></button>`).join("")}</div>${answered?`<div class="feedback ${answer===q.correct?"":"incorrect"}" role="status"><strong>${answer===q.correct?"✓ Correct":"✕ Incorrect"}</strong>${h(q.explanation)}</div><div class="toolbar">${button("quiz-next",r.index===r.items.length-1?"Finish & review →":"Next question →","primary")}${button("quiz-lesson","Read this topic","",`data-topic="${q.topic}" data-topic-module="${q.module}"`)}</div>`:`<p class="small muted">Choose the best answer. You will see the reasoning before continuing.</p>`}</section>`;
  }
  function renderQuizSummary(r) {
    const score=quizScore(r), wrong=r.items.filter((item,i)=>r.answers[i]!==QUESTIONS.find(q=>q.id===item.id).correct);
    return `<section class="panel"><h2>Practice complete</h2><div class="score-ring"><strong>${Math.round(score/r.items.length*100)}%</strong><span>${score} / ${r.items.length} correct</span></div><p style="text-align:center">${score===r.items.length?"All correct in this run. Explain the concepts without options next.":"Review the mechanisms below, then retry the questions you missed."}</p><div class="toolbar card-controls">${button("quiz-new","Configure new run","primary")}${wrong.length?button("quiz-missed",`Retry ${wrong.length} missed`):""}</div><h3 style="margin-top:25px">Answer review</h3>${r.items.map((item,i)=>{const q=QUESTIONS.find(x=>x.id===item.id),right=r.answers[i]===q.correct;return `<article class="review-item"><strong class="${right?"correct-text":"incorrect-text"}">${right?"✓":"✕"} ${i+1}. ${h(q.prompt)}</strong><p>Your answer: ${h(q.options[r.answers[i]])}<br>Correct answer: ${h(q.options[q.correct])}</p><p>${h(q.explanation)}</p>${button("quiz-lesson",`${MODULES[q.module].code} · review topic →`,"",`data-topic="${q.topic}" data-topic-module="${q.module}"`)}</article>`;}).join("")}</section>`;
  }

  // ---------- Navigation, command palette and accessible mobile drawer ----------
  function setDrawer(open) {
    drawerOpen=open && matchMedia("(max-width: 760px)").matches;
    $("#appShell").classList.toggle("drawer-open",drawerOpen);
    $("#drawerBackdrop").hidden=!drawerOpen;
    $("#menuButton").setAttribute("aria-expanded",String(drawerOpen));
    if(drawerOpen) $("#closeSidebar").focus();
  }
  function openCommand() {
    setDrawer(false); $("#commandInput").value=""; updateSearch();
    $("#commandDialog").showModal(); $("#commandInput").focus();
  }
  function updateSearch() {
    const query=$("#commandInput").value.trim().toLowerCase();
    searchItems=Object.keys(MODULES).flatMap(module=>[
      ...files(module).map(([view,name,title])=>({module,view,title,subtitle:`${MODULES[module].code} / ${name}`,text:`${name} ${title}`})),
      ...LESSONS[module].map(l=>({module,view:"lessons",lesson:l.id,title:l.title,subtitle:`${MODULES[module].code} / lesson`,text:[l.title,...l.points,l.example,l.exam,l.question,l.answer].join(" ")}))
    ]).filter(x=>!query||x.text.toLowerCase().includes(query)).slice(0,35);
    $("#commandResults").innerHTML=searchItems.length?searchItems.map((r,i)=>`<button class="command-result" data-search-result="${i}"><small>${h(r.subtitle)}</small>${h(r.title)}</button>`).join(""):'<p class="empty">No matching lessons or tools. Try another term.</p>';
  }
  function downloadCSV() {
    const {results,errors}=validatedForecast(); if(errors.length)return;
    const heading=["Month","Historical actual","Old uplift","Base","Growth percent","Growth amount","Base projection unrounded","New uplift","Forecast unrounded","Forecast displayed"];
    const data=[heading,...results.map((r,i)=>[MONTHS[i],r.actual,r.old,r.base,r.growth,r.increase,r.projection,r.next,r.forecast,rounded(r.forecast)])];
    const csv=data.map(row=>row.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(",")).join("\r\n");
    const url=URL.createObjectURL(new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8"})), a=document.createElement("a");
    a.href=url;a.download=`ERPL7312-forecast-${labs.forecast.preset}.csv`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  const toggle = (list,id) => list.includes(id)?list.filter(x=>x!==id):[...list,id];
  const rerender = () => { renderChrome();renderView(); };
  function handleAction(action,b) {
    const c=sessions[state.module].cards, session=sessions[state.module].quiz;
    switch(action) {
      case "navigate-lessons": navigate("lessons");break;
      case "mark-read": {
        const id=`${state.module}-${b.dataset.id}`;state.read=toggle(state.read,id);persist();renderChrome();
        const yes=state.read.includes(id);b.textContent=yes?"✓ Marked read · undo":"Mark lesson read";b.setAttribute("aria-pressed",String(yes));announce(yes?"Lesson marked read":"Reading mark removed");break;
      }
      case "triangle-scenario": labs.triangle={scope:100,time:100,cost:100};labs.triangle[b.dataset.scenario]=b.dataset.scenario==="scope"?125:80;renderView();persist();break;
      case "triangle-reset": labs.triangle={scope:100,time:100,cost:100};renderView();persist();break;
      case "forecast-reset": labs.forecast=forecastPreset(labs.forecast.preset);renderView();persist();break;
      case "forecast-export": downloadCSV();break;
      case "cost-reset": labs.cost=freshLabs().cost;renderView();persist();break;
      case "mix-reset": labs.mix=freshLabs().mix;renderView();persist();break;
      case "mix-add": if(labs.mix.rows.length<8){labs.mix.rows.push({name:`Product ${labs.mix.rows.length+1}`,share:"0"});renderView();persist();}break;
      case "mix-remove": if(labs.mix.rows.length>1){labs.mix.rows.splice(Number(b.dataset.row),1);renderView();persist();}break;
      case "credit-reset": labs.credit=freshLabs().credit;renderView();persist();break;
      case "cards-flip": c.flipped=!c.flipped;renderView();$("#flashcard").focus({preventScroll:true});break;
      case "cards-prev": moveCard(-1);break;
      case "cards-next": moveCard(1);break;
      case "cards-shuffle": c.order=shuffle(cardDeck().map(x=>x.id));c.index=0;c.flipped=false;renderView();break;
      case "cards-known": {const card=cardDeck()[c.index];if(card){state.known=toggle(state.known,card.id);c.flipped=false;persist();renderView();announce("Learned mark updated");}break;}
      case "cards-reset": {
        const ids=CARD_BANK.filter(x=>c.scope==="both"||x.module===state.module).map(x=>x.id);
        state.known=state.known.filter(id=>!ids.includes(id));c.order=[];c.index=0;c.flipped=false;persist();renderView();break;
      }
      case "quiz-start": startQuiz();break;
      case "quiz-next": {
        const r=session.run;if(!r||r.answers[r.index]===null||r.complete)break;
        if(r.index<r.items.length-1)r.index++;
        else {r.complete=true;if(!r.recorded){state.history.push({module:state.module,scope:r.scope,score:quizScore(r),total:r.items.length,date:new Date().toISOString()});state.history=state.history.slice(-40);r.recorded=true;persist();}}
        rerender();$("#main").focus({preventScroll:true});break;
      }
      case "quiz-new": session.run=null;renderView();break;
      case "quiz-missed": {const r=session.run;if(r)startQuiz(r.items.filter((item,i)=>r.answers[i]!==QUESTIONS.find(q=>q.id===item.id).correct).map(x=>x.id));break;}
      case "quiz-lesson": openLesson(b.dataset.topicModule,b.dataset.topic);break;
    }
  }
  document.addEventListener("click",event=>{
    const b=event.target.closest("button");if(!b||b.disabled)return;
    if(b.dataset.module) return switchModule(b.dataset.module);
    if(b.dataset.nav) return navigate(b.dataset.nav);
    if(b.dataset.closeTab) {
      const id=b.dataset.closeTab;state.tabs[state.module]=state.tabs[state.module].filter(x=>x!==id);
      if(!state.tabs[state.module].length)state.tabs[state.module]=["overview"];
      return navigate(currentView()===id?state.tabs[state.module].at(-1):currentView());
    }
    if(b.dataset.openLesson) return openLesson(state.module,b.dataset.openLesson);
    if(b.dataset.force!==undefined){selectedForce=Number(b.dataset.force);return updateForce();}
    if(b.dataset.fly!==undefined){selectedFly=Number(b.dataset.fly);return updateFly();}
    if(b.dataset.sap!==undefined){selectedSap=Number(b.dataset.sap);return updateSap();}
    if(b.dataset.answer!==undefined) {
      const r=sessions[state.module].quiz.run;
      if(r&&!r.complete&&r.answers[r.index]===null){r.answers[r.index]=Number(b.dataset.answer);renderView();const next=$('[data-action="quiz-next"]');if(next)next.focus({preventScroll:true});}return;
    }
    if(b.dataset.searchResult!==undefined){const r=searchItems[Number(b.dataset.searchResult)];$("#commandDialog").close();if(r){if(r.module!==state.module)switchModule(r.module);r.lesson?openLesson(r.module,r.lesson):navigate(r.view);}return;}
    if(b.dataset.activity) {
      if(b.dataset.activity==="search")return openCommand();
      if(b.dataset.activity==="explorer") {
        if(matchMedia("(max-width: 760px)").matches)setDrawer(!drawerOpen);
        else {sidebarHidden=!sidebarHidden;$("#appShell").classList.toggle("sidebar-hidden",sidebarHidden);}return;
      }
      return navigate(b.dataset.activity==="labs"?MODULES[state.module].labs[0][0]:b.dataset.activity);
    }
    if(b.dataset.action)handleAction(b.dataset.action,b);
  });
  document.addEventListener("input",event=>{
    const el=event.target,d=el.dataset;
    if(el.id==="commandInput")return updateSearch();
    if(el.id==="lessonFilter"){
      const q=el.value.trim().toLowerCase();let count=0;$$("[data-lesson]").forEach(l=>{l.hidden=!l.textContent.toLowerCase().includes(q);if(!l.hidden)count++;});
      $("#lessonCount").textContent=`${count} matching lessons`;$("#noLessons").hidden=count!==0;return;
    }
    if(d.forecast){labs.forecast.rows[Number(d.row)][d.forecast]=el.value;updateForecast();persist();}
    if(d.cost){labs.cost[d.cost]=el.value;updateCost();persist();}
    if(d.credit){labs.credit[d.credit]=el.value;updateCredit();persist();}
    if(d.triangle){labs.triangle[d.triangle]=Number(el.value);updateTriangle();persist();}
    if(d.mixTotal!==undefined){labs.mix.total=el.value;updateMix();persist();}
    if(d.perCase!==undefined){labs.mix.perCase=el.value;updateMix();persist();}
    if(d.mixShare!==undefined){labs.mix.rows[Number(d.mixShare)].share=el.value;updateMix();persist();}
    if(d.mixName!==undefined){labs.mix.rows[Number(d.mixName)].name=el.value;persist();}
  });
  document.addEventListener("change",event=>{
    const el=event.target;
    if(el.id==="forecastPreset"){labs.forecast=forecastPreset(el.value);renderView();persist();}
    if(el.id==="forecastRounding"){labs.forecast.rounding=el.value;updateForecast();persist();}
    if(["cardScope","cardMode"].includes(el.id)){const c=sessions[state.module].cards;c[el.id==="cardScope"?"scope":"mode"]=el.value;c.order=[];c.index=0;c.flipped=false;renderView();}
    if(el.id==="quizScope")sessions[state.module].quiz.scope=el.value;
    if(el.id==="quizCount")sessions[state.module].quiz.count=el.value;
  });
  // Hover and keyboard focus reveal the same SAP field explanation as a click.
  for(const type of ["pointerover","focusin"])document.addEventListener(type,event=>{
    const b=event.target.closest("[data-sap]");if(b&&currentView()==="sap"&&selectedSap!==Number(b.dataset.sap)){selectedSap=Number(b.dataset.sap);updateSap();}
  });
  $("#commandButton").addEventListener("click",openCommand);
  $("#closeCommand").addEventListener("click",()=>$("#commandDialog").close());
  $("#menuButton").addEventListener("click",()=>setDrawer(!drawerOpen));
  for(const id of ["closeSidebar","drawerBackdrop"])$("#"+id).addEventListener("click",()=>{setDrawer(false);$("#menuButton").focus();});
  $("#commandDialog").addEventListener("click",e=>{if(e.target===$("#commandDialog")){const rect=e.target.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)e.target.close();}});
  document.addEventListener("keydown",event=>{
    if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==="k"){event.preventDefault();if(!$("#commandDialog").open)openCommand();return;}
    if($("#commandDialog").open){if(event.key==="Enter"&&event.target.id==="commandInput"){event.preventDefault();$("[data-search-result]")?.click();}return;}
    if(event.key==="Escape"&&drawerOpen){setDrawer(false);$("#menuButton").focus();return;}
    if(drawerOpen&&event.key==="Tab"){
      const focusables=$$("button, input, select, a[href]",$("#sidebar")).filter(x=>!x.disabled&&x.getClientRects().length),first=focusables[0],last=focusables.at(-1);
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}return;
    }
    if(currentView()==="cards"&&!event.target.closest("input,select,textarea")&&!event.ctrlKey&&!event.metaKey&&["ArrowLeft","ArrowRight"].includes(event.key)) {event.preventDefault();moveCard(event.key==="ArrowLeft"?-1:1);}
  });
  matchMedia("(max-width: 760px)").addEventListener("change",()=>{setDrawer(false);$("#appShell").classList.toggle("sidebar-hidden",sidebarHidden&&!matchMedia("(max-width: 760px)").matches);});

  // Startup does not require fetch(), modules, a server or network access.
  navigate("overview",false);persist();
})();
