import fs from 'node:fs';
import path from 'node:path';

const locationsDir = path.resolve(process.cwd(), 'src/content/locations');
if (!fs.existsSync(locationsDir)) {
  fs.mkdirSync(locationsDir, { recursive: true });
}

interface TownDefinition {
  town: string;
  slug: string;
  county: string;
  tier: 1 | 2;
  postcodes: string[];
  lat: number;
  lng: number;
  cazEnabled: boolean;
  cazNote: string;
  travelInfo: string;
  nearbyAreas: Array<{ name: string; slug: string }>;
  intro: string;
  localKnowledge: string;
  faqs: Array<{ question: string; answer: string }>;
}

const towns: TownDefinition[] = [
  // --- TIER 1 (9 TOWNS) ---
  {
    town: "Birmingham",
    slug: "birmingham",
    county: "West Midlands",
    tier: 1,
    postcodes: ["B1", "B2", "B3", "B4", "B5", "B15", "B16", "B18", "B19", "B20", "B29", "B30"],
    lat: 52.4862,
    lng: -1.8904,
    cazEnabled: true,
    cazNote: "Our entire fleet is 100% compliant with Birmingham's Clean Air Zone inside the A4540 Middleway ring road. You will never pay CAZ penalty surcharges.",
    travelInfo: "Direct access via the A38(M) Aston Expressway, M6 Junction 6 (Spaghetti Junction), and the inner A4540 Middleway ring road.",
    nearbyAreas: [
      { name: "Sutton Coldfield", slug: "sutton-coldfield" },
      { name: "Solihull", slug: "solihull" },
      { name: "West Bromwich", slug: "west-bromwich" }
    ],
    intro: "Jimmys Removals delivers dependable, fully insured house and commercial removals across the city of Birmingham. Moving across the UK's second city involves navigating diverse architectural environments, from modern high-rise apartments with strict lift bookings in the Jewellery Quarter and Digbeth to historic Victorian terraced homes in Sparkhill, Balsall Heath, and Harborne. Our dedicated moving teams operate Clean Air Zone compliant Luton vans equipped with tail lifts, high-grade furniture blankets, and heavy-duty transit straps. Whether you are moving a single room studio along Broad Street or relocating a six-bedroom family home in Edgbaston, our experienced porters handle the heavy lifting with precision, care, and total transparency throughout the moving day.",
    localKnowledge: "Central Birmingham presents specific logistical demands that our removal drivers handle daily. The Birmingham Clean Air Zone encompasses all roads inside the A4540 Middleway ring road; because our modern fleet complies with Euro 6 standards, our clients avoid the daily non-compliant vehicle charges levied on older vans. For city-centre apartment developments along the canals, Holloway Head, and the Convention Quarter, we coordinate closely with on-site concierges to reserve designated service lift slots and secure loading bay approvals.\n\nIn older suburban quarters such as Small Heath, Sparkhill, and Lozells, narrow Victorian residential streets frequently have cars parked along both kerbs, leaving restricted clearance. Our drivers are skilled at positioning 3.5-tonne Luton vans safely without obstructing through traffic. Furthermore, our scheduling takes into account the morning and evening tidal-flow lanes on the A38(M) Aston Expressway and bottlenecks near Spaghetti Junction (M6 Junction 6), ensuring your move runs to time.",
    faqs: [
      {
        question: "Do you charge extra for entering the Birmingham Clean Air Zone?",
        answer: "No. All Jimmys Removals vehicles meet Euro 6 low-emission standards, meaning we operate inside the A4540 Middleway ring road with complete exemption from CAZ fees."
      },
      {
        question: "How do you handle removals in city-centre apartment blocks with restricted lift slots?",
        answer: "We arrange timed staging where our porters pre-wrap furnishings and stage items near service elevators, ensuring rapid loading within your booked building concierge time window."
      },
      {
        question: "Can you assist with parking permits in Birmingham residential zones?",
        answer: "We advise customers on applying for temporary parking dispensations through Birmingham City Council for controlled parking zones in Edgbaston, Jewellery Quarter, and city-centre streets."
      },
      {
        question: "What size vehicles do you use for house moves in Birmingham?",
        answer: "We primarily utilize 3.5-tonne Luton low-loader box vans with tail lifts, offering massive 800+ cubic foot capacities while retaining the maneuverability needed for tight urban roads."
      }
    ]
  },
  {
    town: "Wolverhampton",
    slug: "wolverhampton",
    county: "West Midlands",
    tier: 1,
    postcodes: ["WV1", "WV2", "WV3", "WV4", "WV6", "WV10", "WV11"],
    lat: 52.5862,
    lng: -2.1288,
    cazEnabled: false,
    cazNote: "Wolverhampton does not operate a Clean Air Zone charging scheme. No emission surcharges apply.",
    travelInfo: "Connected via the A449 Penn Road / Stafford Road, A4123 Birmingham New Road, and M54 Junction 2.",
    nearbyAreas: [
      { name: "Dudley", slug: "dudley" },
      { name: "Walsall", slug: "walsall" },
      { name: "Bilston", slug: "bilston" }
    ],
    intro: "For house removals, apartment relocations, and commercial relocations across Wolverhampton, Jimmys Removals provides an experienced, trusted local service. From leafy detached properties in Tettenhall, Wightwick, and Penn to dense residential communities in Whitmore Reans, Blakenhall, and Wednesfield, we deliver reliable, fully insured removals backed by courteous professionals. Moving home in Wolverhampton demands a team that understands local traffic flows around the inner ring road and can navigate Victorian avenues as smoothly as modern estates off the Stafford Road corridor. We supply complete packing, dismantling, and transit services tailored to your exact timetable, protecting your possessions with heavy-duty transit blankets, quilted mattress covers, and specialist webbing throughout the journey.",
    localKnowledge: "Operating in Wolverhampton requires familiarity with the city's key road arteries and urban layout. The Wolverhampton Ring Road (St Davids and St Peters) links all major radials, and timing moves to avoid peak school runs along the A449 Penn Road or the A4123 Birmingham New Road prevents unnecessary transit delays. In historic residential pockets such as Tettenhall Wood and Compton, gravel driveways and mature overhanging trees require careful vehicle manoeuvring, which our drivers handle using low-profile Luton vehicles.\n\nConversely, in high-density terraced streets around Whitmore Reans and Graiseley, on-street parking requires careful early-morning vehicle placement. We also frequently service new housing developments towards i54 and Wobaston Road, where unfinished estate roads and builder traffic require strategic approach routes. Whatever the property style, we ensure your possessions are protected with quilted blankets and anchored securely during transit.",
    faqs: [
      {
        question: "Do you cover all Wolverhampton postcodes?",
        answer: "Yes, we cover all WV postcodes including WV1 through WV11, servicing Tettenhall, Penn, Bushbury, Wednesfield, Compton, and surrounding Black Country neighbourhoods."
      },
      {
        question: "Can you move heavy furniture into older Victorian homes in Wolverhampton?",
        answer: "Yes, our team is equipped with furniture dollies, protective doorway pads, and disassembly tools to navigate traditional tight hallways and staircases safely."
      },
      {
        question: "Is Goods in Transit insurance included for Wolverhampton removals?",
        answer: "Yes, every quote includes up to £50,000 Goods in Transit cover and £2,000,000 Public Liability insurance as standard."
      },
      {
        question: "How do you navigate Wolverhampton's inner ring road during busy periods?",
        answer: "Our operations desk schedules moves to bypass morning bottlenecks near Chapel Ash and the railway station, selecting optimal transit corridors across the city."
      }
    ]
  },
  {
    town: "Coventry",
    slug: "coventry",
    county: "West Midlands",
    tier: 1,
    postcodes: ["CV1", "CV2", "CV3", "CV4", "CV5", "CV6"],
    lat: 52.4068,
    lng: -1.5197,
    cazEnabled: false,
    cazNote: "Coventry operates a Class E targeted CAZ for buses and taxis only; private removals vans are completely exempt from charges.",
    travelInfo: "Direct access via the Coventry Ringway (A4053), A45 Foleshill/Stonebridge Highway, and A46 bypass.",
    nearbyAreas: [
      { name: "Solihull", slug: "solihull" },
      { name: "Nuneaton", slug: "nuneaton" },
      { name: "Bedworth", slug: "bedworth" }
    ],
    intro: "Jimmys Removals provides premier domestic and commercial removal services across the historic city of Coventry. Whether you are moving between classic 1930s suburban semi-detached homes in Cheylesmore and Styvechale, settling into a modern apartment overlooking the regenerated canal basin, or relocating office facilities near the University of Warwick Science Park, our experienced team ensures a seamless transition. We provide fully equipped Luton removal vehicles, DBS-checked porters, and optional packing materials to make your Coventry move efficient, stress-free, and cost-effective. Every item is blanket-wrapped, securely lashed to internal van rails, and transported directly to your destination with zero intermediate co-loading.",
    localKnowledge: "Coventry's unique infrastructure is defined by its iconic ring road (A4053), notorious for short entry slip roads and rapid lane merges that demand confident, defensive driving when piloting loaded 3.5-tonne vans. Our drivers know precisely which junction exits to take for access into Spon End, Hillfields, and the city centre without getting caught in congested circular loops.\n\nIn student hubs such as Earlsdon and Canley, end-of-term turnover creates intense moving activity, requiring scheduled vehicle positioning along narrow residential avenues where roadside parking is at a premium. Towards the south, along the Kenilworth Road and Styvechale suburbs, sprawling grounds and private gravel drives call for floor coverings and careful vehicle turning. With direct routes onto the A45 and A46, we also provide fast connectivity for long-distance relocations out of Coventry to London or the north.",
    faqs: [
      {
        question: "Are your removal vans subject to clean air charges in Coventry?",
        answer: "No. Coventry's clean air measures do not charge private removals vans or light goods vehicles, meaning zero additional emissions fees."
      },
      {
        question: "Do you service student moves for Coventry University and University of Warwick?",
        answer: "Yes, we regularly support students moving into halls, shared student houses in Earlsdon, or returning home across the UK with affordable hourly and fixed rates."
      },
      {
        question: "How do you manage parking along busy streets in Earlsdon or Foleshill?",
        answer: "We liaise with you beforehand to arrange vehicle space directly outside your property, arriving early to secure safe loading without blocking narrow thoroughfares."
      },
      {
        question: "Can you provide packing boxes in Coventry before our moving day?",
        answer: "Yes, we deliver robust double-walled boxes, bubble wrap, packing paper, and tape ahead of time if you prefer self-packing."
      }
    ]
  },
  {
    town: "Solihull",
    slug: "solihull",
    county: "West Midlands",
    tier: 1,
    postcodes: ["B90", "B91", "B92", "B93", "B94"],
    lat: 52.413,
    lng: -1.778,
    cazEnabled: false,
    cazNote: "Solihull does not have a Clean Air Zone. No emission charges apply.",
    travelInfo: "Excellent motorway connectivity via the M42 (Junctions 4, 5, and 6), A34 Stratford Road, and A41 Warwick Road.",
    nearbyAreas: [
      { name: "Birmingham", slug: "birmingham" },
      { name: "Shirley", slug: "shirley" },
      { name: "Coventry", slug: "coventry" }
    ],
    intro: "Jimmys Removals delivers white-glove domestic removals, furniture assembly, and professional packing services throughout the Borough of Solihull. Renowned for its affluent residential avenues, outstanding schools, and expansive properties, Solihull demands a removals company with exceptional standards of care and presentation. From premier detached residences along Alderbrook Road and Hampton Lane to elegant apartments in Touchwood, Olton, and Shirley, our polite, DBS-checked porters ensure your high-value furnishings, electronics, and delicate artwork are moved with supreme professionalism, heavy-duty floor protection, and comprehensive £50,000 Goods in Transit insurance. We cater for full estate moves, delicate antique transport, and modern executive apartment transfers across the borough.",
    localKnowledge: "Solihull features some of the West Midlands' most substantial family homes, particularly in Knowle, Dorridge, and central Solihull. These properties frequently involve extensive square footage, long gravel drives, and multi-car parking areas. Our teams use heavy-duty neoprene walkway protectors to shield hardwood, parquet, and light-coloured carpets from footwear and trolley wheels during multi-hour loading sequences.\n\nWhen handling moves involving large gardens and outbuildings in rural Solihull hamlets like Barston and Catherine-de-Barnes, we allocate extra crew members to ensure heavy garden furniture, barbecues, and gym equipment are moved efficiently. Traffic along the A34 Stratford Road retail corridor can be dense, so our drivers utilise quieter arterial links such as the B4102 to maintain dependable schedules between collections and drop-offs.",
    faqs: [
      {
        question: "Do you provide white-glove removals for large properties in Solihull?",
        answer: "Yes, our white-glove service includes full packing, wardrobe box packing, specialist antique protection, furniture dismantling, and room-by-room reassembly."
      },
      {
        question: "How do you protect gravel driveways and luxury flooring in Solihull homes?",
        answer: "We use rubber-wheeled dollies to prevent gravel rutting and lay protective floor runners across hallways, staircases, and entrances."
      },
      {
        question: "Are your removal teams insured for high-value artwork and antiques?",
        answer: "Yes, our Goods in Transit policy provides £50,000 protection as standard, with bespoke high-value declaration options available upon request."
      },
      {
        question: "Can you help with dismantling bespoke modular wardrobes in Solihull?",
        answer: "Yes, our technicians carry comprehensive toolkits to dismantle and reassemble large sliding wardrobes, ottoman bed frames, and luxury dining tables."
      }
    ]
  },
  {
    town: "Dudley",
    slug: "dudley",
    county: "West Midlands",
    tier: 1,
    postcodes: ["DY1", "DY2", "DY3"],
    lat: 52.5123,
    lng: -2.0811,
    cazEnabled: false,
    cazNote: "Dudley does not operate a Clean Air Zone. No emission fees apply.",
    travelInfo: "Convenient links via the A461 Duncan Edwards Way, A459, and A4123 New Road connecting to the M5 at Junction 2.",
    nearbyAreas: [
      { name: "Wolverhampton", slug: "wolverhampton" },
      { name: "Stourbridge", slug: "stourbridge" },
      { name: "Brierley Hill", slug: "brierley-hill" }
    ],
    intro: "Jimmys Removals is proud to serve the historic Black Country town of Dudley with professional, reliable removals and storage solutions. Dudley's unique hilly geography and distinctive mix of industrial heritage properties, hilltop semis in Sedgley and Gornal, and tight terraced roads around Kate's Hill and Netherton require an experienced removals team with genuine local driving prowess. We deploy agile 3.5-tonne Luton vans capable of tackling steep gradients and tight turning circles, backed by hard-working porters who take the physical strain out of your move. With full Goods in Transit insurance and upfront fixed pricing, we ensure your home transition is completely stress-free.",
    localKnowledge: "Moving house in Dudley is characterised by its pronounced topography. Steep inclines such as those around Castle Hill, Queen's Cross, and Rowley Hills require drivers who understand vehicle weight distribution and parking chocking on slopes. When loading vans parked on significant gradients, our porters carefully sequence goods, anchoring heavy appliances low and forward against the bulkhead to ensure vehicle balance.\n\nIn older neighbourhoods near Dudley town centre and Netherton, on-street parking is often tight, with steep brick steps leading up to front doors. Our crew comes equipped with ramp extensions and piano dollies to bridge thresholds safely. For properties near the busy Castlegate roundabout or Merry Hill corridor, we plan arrival timings to circumvent congestion on the A461 and A4037.",
    faqs: [
      {
        question: "Can your vans manage moves on steep streets in Dudley and Sedgley?",
        answer: "Yes, our 3.5-tonne Luton vans are ideally balanced for steep Black Country terrain, and our crews use heavy-duty wheel chocks and tail lifts for safe loading on hills."
      },
      {
        question: "How do you handle homes with steep stepped front gardens in Dudley?",
        answer: "Our team carries heavy-duty sack trucks, shoulder carrying straps, and ramps to transport heavy items safely across multi-tiered accessways."
      },
      {
        question: "Do you offer man and van services for smaller flat moves in Dudley?",
        answer: "Yes, we offer hourly and fixed-rate man and van services with 1, 2, or 3 movers for smaller flats, student relocations, and single item moves."
      },
      {
        question: "What notice is required for booking a house removal in Dudley?",
        answer: "While we recommend 1 to 2 weeks notice once completion is agreed, our 7-day schedule allows us to accommodate short-notice moves when vans are available."
      }
    ]
  },
  {
    town: "Walsall",
    slug: "walsall",
    county: "West Midlands",
    tier: 1,
    postcodes: ["WS1", "WS2", "WS3", "WS4", "WS5"],
    lat: 52.5843,
    lng: -1.9823,
    cazEnabled: false,
    cazNote: "Walsall does not operate a Clean Air Zone. No emission charges apply.",
    travelInfo: "Excellent motorway corridors via the M6 (Junctions 7, 9, and 10) and the A454 Black Country Route.",
    nearbyAreas: [
      { name: "Wolverhampton", slug: "wolverhampton" },
      { name: "Bloxwich", slug: "bloxwich" },
      { name: "Aldridge", slug: "aldridge" }
    ],
    intro: "For residential removals, office relocations, and clearance services in Walsall, Jimmys Removals provides a trusted, first-class service. Spanning leather-trade heritage terraces near the town centre to generous 1930s family homes along the Broadway, Gillity Village, and Park Hall, Walsall features diverse residential settings. Our removals staff are DBS-checked, fully insured, and equipped with modern Luton vehicles, heavy-duty quilted covers, and furniture dismantling equipment to ensure your moving day proceeds without complication. Whether you are transitioning to a newly built home or downsizing from a substantial family property, our hardworking team takes total care of your furnishings from collection to delivery.",
    localKnowledge: "Walsall's transport arteries are heavily influenced by the M6 motorway, particularly Junction 10, which connects the town to the wider West Midlands network. Our drivers monitor live traffic feeds along the A454 and Pleck Road to bypass junction bottlenecks when executing time-critical moves. In residential areas such as Palfrey and Caldmore, densely clustered terraced avenues often present restricted curbside access, making our agile 3.5-tonne Luton vehicles far more effective than oversized 7.5-tonne lorries.\n\nTowards the south along Walsall's boundary with Great Barr (WS5), substantial detached properties with sweeping frontages require floor protection and careful handling of heavy oak and mahogany furniture. We also regularly service new commercial developments around the Waterfront and Wharfingers, assisting local businesses with out-of-hours office relocations.",
    faqs: [
      {
        question: "How do you navigate narrow streets in Caldmore and Palfrey?",
        answer: "Our Luton box vans fit comfortably down narrow terraced avenues without blocking residential access, allowing efficient curbside loading."
      },
      {
        question: "Can you help with moves near M6 Junction 10?",
        answer: "Yes, our local base gives us rapid access across Walsall, Bloxwich, and Darlaston, timing moves to avoid peak motorway interchange delays."
      },
      {
        question: "Do you provide packing materials for Walsall customers?",
        answer: "Yes, we can deliver strong double-walled moving boxes, bubble wrap, tape, and wardrobe cartons directly to your Walsall home before moving day."
      },
      {
        question: "Are your Walsall removal services available on weekends?",
        answer: "Yes, we operate 7 days a week, offering Saturday and Sunday moving slots at competitive, transparent rates."
      }
    ]
  },
  {
    town: "West Bromwich",
    slug: "west-bromwich",
    county: "West Midlands",
    tier: 1,
    postcodes: ["B70", "B71"],
    lat: 52.518,
    lng: -1.996,
    cazEnabled: false,
    cazNote: "West Bromwich is outside the Birmingham CAZ. No clean air fees apply locally.",
    travelInfo: "Direct motorway access via the M5 Junction 1, A41 Black Country New Road, and A4031 All Saints Way.",
    nearbyAreas: [
      { name: "Birmingham", slug: "birmingham" },
      { name: "Oldbury", slug: "oldbury" },
      { name: "Smethwick", slug: "smethwick" }
    ],
    intro: "Jimmys Removals is your premier partner for home and commercial relocations in West Bromwich. As a vital hub of Sandwell and the Black Country, West Bromwich combines energetic shopping quarters, traditional residential avenues around Charlemont, Greets Green, and Stone Cross, and contemporary developments near New Square and Sandwell Valley. Our removals personnel bring an unbeatable combination of punctual professionalism, courteous service, and competitive pricing, ensuring that your home move, office relocation, or storage transit is executed with minimal disruption. Every customer benefits from our clean Luton vans, protective floor runners, and £50,000 Goods in Transit cover.",
    localKnowledge: "West Bromwich's key road intersection is the bustling M5 Junction 1 roundabout, connecting the A41 expressway into Birmingham. Our operations team plans travel routes to avoid peak congestion around Carters Green and Dartmouth Golf Course. In areas like Charlemont Farm and Churchfield, mixed housing stock from council-built semi-detached houses to modern townhouses provides straightforward front access, though care is taken around school zones along All Saints Way.\n\nFor commercial relocations around the industrial estates of Kelvin Way and Brandon Way, we provide weekend office moves that relocate IT equipment, desks, and storage racks with zero Monday downtime. Every item moved across West Bromwich is safeguarded by £50,000 Goods in Transit cover and blanket-wrapped inside our carpeted van interiors.",
    faqs: [
      {
        question: "Are moves in West Bromwich exempt from the Birmingham Clean Air Zone?",
        answer: "Yes, West Bromwich is in Sandwell and outside the Birmingham CAZ. If your move takes you into Birmingham city centre, our vans are 100% compliant anyway."
      },
      {
        question: "How do you handle moves near M5 Junction 1 during rush hour?",
        answer: "We schedule departures to bypass peak motorway interchange queues, taking alternative Black Country routes when appropriate."
      },
      {
        question: "Do you offer house clearance in West Bromwich?",
        answer: "Yes, we provide licensed, compassionate house and probate clearance across West Bromwich, diverting usable furniture to local charities."
      },
      {
        question: "Can you provide storage for West Bromwich homeowners between completions?",
        answer: "Yes, we offer secure containerised storage facilities in Birmingham with collection and redelivery service whenever your new home is ready."
      }
    ]
  },
  {
    town: "Sutton Coldfield",
    slug: "sutton-coldfield",
    county: "West Midlands",
    tier: 1,
    postcodes: ["B72", "B73", "B74", "B75", "B76"],
    lat: 52.563,
    lng: -1.825,
    cazEnabled: false,
    cazNote: "Sutton Coldfield is outside the Birmingham CAZ. No clean air fees apply.",
    travelInfo: "Conveniently reached via the A38 Lichfield Road, A5127, and M6 Toll Junction T3 / M42.",
    nearbyAreas: [
      { name: "Birmingham", slug: "birmingham" },
      { name: "Erdington", slug: "erdington" },
      { name: "Lichfield", slug: "lichfield" }
    ],
    intro: "Jimmys Removals provides premium house removals and professional packing throughout the Royal Town of Sutton Coldfield. Renowned for historic Sutton Park, prestigious private estates in Four Oaks, and desirable residential quarters in Boldmere, Walmley, and Wylde Green, Sutton Coldfield demands an experienced removals team with meticulous attention to detail. We treat every antique sideboard, framed artwork, and contemporary suite with the utmost care, utilising quilted furniture covers, specialized floor runners, and fully insured 3.5-tonne Luton vans. Whether moving within the town or relocating across the UK, our DBS-checked team provides a polished, stress-free moving experience.",
    localKnowledge: "Sutton Coldfield encompasses diverse architectural properties, from private gated estates along the Four Oaks Park conservation area to Victorian and Edwardian villas near the town centre and 1930s suburban avenues in Boldmere. In conservation areas like Four Oaks, gravel roadways, low-hanging mature beech trees, and preservation guidelines require sensitive driving and the use of pneumatic-tyred moving dollies that leave private driveways unmarked.\n\nHilly topography around Wylde Green and Maney requires secure load strapping inside the vehicle before setting off. When moving clients in the busy shopping corridors of Boldmere Road or Parade, our crews arrive early to secure optimal curbside loading positions without impeding local shoppers or bus routes. With rapid access to the A38 and M6 Toll, we also specialise in long-distance moves from Sutton Coldfield to London and the Home Counties.",
    faqs: [
      {
        question: "Do you have experience moving luxury homes in Four Oaks and Little Aston?",
        answer: "Yes, our team frequently conducts high-end moves in Four Oaks, providing full packing, antique wrapping, and protective floor runners for luxury residences."
      },
      {
        question: "Can your vans navigate private gravel drives in Sutton Coldfield without damage?",
        answer: "Yes, our Luton low-loaders have gentle weight distribution and our porters use rubber pneumatic wheels to protect manicured gravel drives."
      },
      {
        question: "Do you supply specialist wardrobe cartons for designer clothing?",
        answer: "Yes, we provide sturdy hanging wardrobe boxes so your garments transfer directly from fitted wardrobes into the van without creasing."
      },
      {
        question: "Is Sutton Coldfield affected by the Birmingham Clean Air Zone?",
        answer: "No, Sutton Coldfield is located outside the A4540 Middleway. No CAZ charges apply to domestic moves within the Royal Town."
      }
    ]
  },
  {
    town: "Stourbridge",
    slug: "stourbridge",
    county: "West Midlands",
    tier: 1,
    postcodes: ["DY8", "DY9"],
    lat: 52.457,
    lng: -2.148,
    cazEnabled: false,
    cazNote: "Stourbridge operates without a Clean Air Zone. Zero emission surcharges apply.",
    travelInfo: "Main road access via the A491, A458, and A456 Hagley Road linking towards the M5 at Junction 3 or 4.",
    nearbyAreas: [
      { name: "Dudley", slug: "dudley" },
      { name: "Halesowen", slug: "halesowen" },
      { name: "Kingswinford", slug: "kingswinford" }
    ],
    intro: "For trusted home removals, flat moves, and specialist piano transport in Stourbridge, Jimmys Removals delivers an exceptional local service. Famous for its historic glass-making heritage, charming canal networks, and popular residential communities in Norton, Pedmore, Oldswinford, and Wollaston, Stourbridge is a vibrant corner of the Black Country border. Our skilled porters combine friendly manners with meticulous packing and careful van loading, safeguarding your family possessions throughout the moving journey. We handle everything from fragile crystal and mirrors to heavy wardrobes, providing complete peace of mind backed by £50,000 Goods in Transit insurance.",
    localKnowledge: "Stourbridge's roads range from the busy Stourbridge Ring Road (A491) to narrow, leafy avenues and steep cul-de-sacs in Pedmore and Norton. Properties around Oldswinford often feature long, stepped garden pathways that require strategic porter rotation to carry heavy white goods and furniture safely. In historic canal-side pockets like the Glass Quarter in Wordsley and Amblecote, tight stone bridges and narrow lane turns necessitate the precision handling of our compact 3.5-tonne Luton vehicles.\n\nFurthermore, for clients moving towards Hagley and the Clent Hills along the A456, country lanes require attentive navigation. Our teams are equipped with tail lifts and heavy-duty transit blankets, ensuring items like upright pianos, glass display cabinets, and solid timber furnishings arrive in pristine condition.",
    faqs: [
      {
        question: "Do you cover all areas of Stourbridge including Pedmore and Norton?",
        answer: "Yes, we cover DY8 and DY9 postcodes comprehensively, including Wollaston, Oldswinford, Pedmore, Norton, and Amblecote."
      },
      {
        question: "Can you safely move glass cabinets and delicate crystal in Stourbridge?",
        answer: "Given Stourbridge's glass heritage, we take special pride in wrapping delicate glassware, mirrors, and vitrines using acid-free paper, bubble wrap, and cushioned blankets."
      },
      {
        question: "How do you handle piano removals in Stourbridge?",
        answer: "We use specialist piano shoes, heavy-duty quilted covers, and tail-lift Luton vans to safely relocate upright and baby grand pianos."
      },
      {
        question: "What days of the week do you operate in Stourbridge?",
        answer: "We carry out house removals 7 days a week, including Saturdays and Sundays, with no hidden weekend surcharges."
      }
    ]
  },

  // --- TIER 2 (28 TOWNS) ---
  {
    town: "Halesowen",
    slug: "halesowen",
    county: "West Midlands",
    tier: 2,
    postcodes: ["B62", "B63"],
    lat: 52.45,
    lng: -2.05,
    cazEnabled: false,
    cazNote: "Halesowen is outside any Clean Air Zone. No emission fees apply.",
    travelInfo: "Convenient access to the M5 at Junction 3 and the A456 Manor Way bypass.",
    nearbyAreas: [{ name: "Stourbridge", slug: "stourbridge" }, { name: "Dudley", slug: "dudley" }, { name: "Birmingham", slug: "birmingham" }],
    intro: "Jimmys Removals provides reliable, cost-effective house removals, furniture assembly, and professional packing services across Halesowen and surrounding areas. Positioned right on the border between the Black Country and picturesque Worcestershire countryside, Halesowen features hillside residences in Hasbury, mature family avenues in Lapal, and convenient commuter developments near Hayley Green and Hawne. Our dedicated removals team brings in-depth local knowledge of the steep Clent-facing slopes, providing punctual, insured moves with high-capacity Luton vehicles. We supply all required mattress covers, floor runners, and transit blankets to ensure every household item is delivered in pristine condition.",
    localKnowledge: "Halesowen's topography rises sharply towards the Clent Hills and Frankley. Roads like Hagley Road and residential avenues in Hasbury present steep drives that demand careful van chocking and secure load strapping. The A456 Manor Way connects directly to M5 Junction 3, allowing fast access for long-distance relocations.",
    faqs: [
      { question: "Do you service moves near M5 Junction 3 in Halesowen?", answer: "Yes, our vans have direct access to Lapal, Hasbury, and central Halesowen via M5 Junction 3." },
      { question: "Can you handle moves on steep slopes in Hasbury?", answer: "Yes, our team uses wheel chocks, tail-lift vans, and safety straps designed for hilly Black Country terrain." },
      { question: "Do you dismantle and reassemble flat-pack furniture?", answer: "Yes, we regularly dismantle wardrobes, beds, and tables as part of our comprehensive move service." },
      { question: "Are your Halesowen quotes fixed with no hidden fees?", answer: "All our quotations are clear, fixed, and fully itemised with zero hidden charges." }
    ]
  },
  {
    town: "Oldbury",
    slug: "oldbury",
    county: "West Midlands",
    tier: 2,
    postcodes: ["B68", "B69"],
    lat: 52.504,
    lng: -2.016,
    cazEnabled: false,
    cazNote: "Oldbury is outside the Clean Air Zone.",
    travelInfo: "Directly located at M5 Junction 2 with links via the A4123 Wolverhampton Road.",
    nearbyAreas: [{ name: "West Bromwich", slug: "west-bromwich" }, { name: "Smethwick", slug: "smethwick" }, { name: "Dudley", slug: "dudley" }],
    intro: "For house removals, commercial deliveries, and secure containerised storage in Oldbury, Jimmys Removals provides an experienced, dependable service. Situated at the crossroads of the M5 motorway and the Sandwell metropolitan borough, Oldbury combines bustling retail centres, Langley Green terraces, and established suburban homes across Bristnall and Brandhall. Our DBS-checked removals team handles your furniture with transit blankets, heavy webbing straps, and floor protection, ensuring a smooth transition to your new home. With transparent pricing and complete insurance coverage, we take the hassle out of moving in Oldbury.",
    localKnowledge: "Oldbury is anchored by the major M5 Junction 2 elevated roundabout and the busy A4123 Wolverhampton Road. Our drivers use local knowledge to bypass commuter congestion near Oldbury Green Retail Park, navigating residential avenues around Causeway Green and Brandhall with ease.",
    faqs: [
      { question: "How quickly can you quote a house move in Oldbury?", answer: "We can provide an accurate quotation within hours via our online form or WhatsApp inventory." },
      { question: "Do you move flats in Oldbury with stair access?", answer: "Yes, our porters are experienced in multi-storey carry for apartments and converted flats." },
      { question: "Are your vans insured for commercial office moves in Oldbury?", answer: "Yes, we carry £50,000 Goods in Transit and £2,000,000 Public Liability insurance." },
      { question: "Can you supply moving boxes to Oldbury residents?", answer: "Yes, we deliver sturdy double-walled cartons, tape, and bubble wrap before moving day." }
    ]
  },
  {
    town: "Smethwick",
    slug: "smethwick",
    county: "West Midlands",
    tier: 2,
    postcodes: ["B66", "B67"],
    lat: 52.493,
    lng: -1.968,
    cazEnabled: false,
    cazNote: "Smethwick is outside the Birmingham CAZ, though our vans are fully compliant if crossing the boundary.",
    travelInfo: "Close to the A457 Tollhouse Way and A4092 Cape Hill corridors into Birmingham.",
    nearbyAreas: [{ name: "Birmingham", slug: "birmingham" }, { name: "Oldbury", slug: "oldbury" }, { name: "West Bromwich", slug: "west-bromwich" }],
    intro: "Jimmys Removals delivers affordable, high-quality house and flat removals across Smethwick and Bearwood. From traditional Victorian terraces in Cape Hill and Victoria Park to modern family developments near the Midland Metropolitan University Hospital, our team provides careful lifting, professional packing, and agile van transport designed to handle busy urban streets without stress. We know how to manage narrow staircases, multi-floor carry, and curbside loading, ensuring that your furniture, white goods, and fragile items arrive safely at your new address.",
    localKnowledge: "Smethwick features dense terraced housing with narrow carriageways, especially around Bearwood Road, Waterloo Road, and Cape Hill. Our 3.5-tonne Luton vans are ideally proportioned to navigate parked cars and tight corners where larger 7.5-tonne lorries would struggle or block traffic.",
    faqs: [
      { question: "Can you handle moves in busy areas like Bearwood?", answer: "Yes, we regularly manage moves in Bearwood, arriving early to secure curbside van parking." },
      { question: "Are your vans compliant if moving from Smethwick into central Birmingham?", answer: "Yes, our fleet is Euro 6 compliant and exempt from all Birmingham Clean Air Zone charges." },
      { question: "Do you offer man and van services in Smethwick?", answer: "Yes, our man and van service is ideal for small flat moves, student relocations, and single bulky items." },
      { question: "Can you move heavy washing machines and appliances?", answer: "Yes, our team uses appliance barrows and protective covers to safely transport white goods." }
    ]
  },
  {
    town: "Tipton",
    slug: "tipton",
    county: "West Midlands",
    tier: 2,
    postcodes: ["DY4"],
    lat: 52.527,
    lng: -2.074,
    cazEnabled: false,
    cazNote: "Tipton is outside any Clean Air Zone.",
    travelInfo: "Connected via the A4123 Birmingham New Road and the A4037 Hurst Lane.",
    nearbyAreas: [{ name: "Dudley", slug: "dudley" }, { name: "Wednesbury", slug: "wednesbury" }, { name: "Bilston", slug: "bilston" }],
    intro: "Looking for trusted removals in Tipton? Jimmys Removals provides comprehensive house removals, furniture clearance, and student moves across DY4. From family homes near Victoria Park and canal-side cottages to modern housing developments in Great Bridge, Princes End, and Dudley Port, our friendly crew makes moving day straightforward and dependable. With transparent pricing, punctual arrivals, and £50,000 Goods in Transit insurance as standard, we treat every customer's belongings with the highest standard of Black Country care.",
    localKnowledge: "Tipton is intersected by historic canals and railway crossings that create distinct neighbourhood pockets. Our drivers know the low bridge restrictions and canal bridge weight limits around Factory Bridge and Bloomfield, ensuring your removal van follows safe, approved transit routes.",
    faqs: [
      { question: "Are you familiar with low bridges around Tipton?", answer: "Yes, our drivers strictly follow routes avoiding canal bridges with height or weight restrictions." },
      { question: "Do you provide house clearance in Tipton?", answer: "Yes, we offer licensed clearance for estates, attics, garages, and end-of-tenancy properties." },
      { question: "Can I book a weekend move in Tipton?", answer: "Yes, we operate 7 days a week with weekend slots available at standard transparent rates." },
      { question: "How much Goods in Transit insurance is included?", answer: "All moves include up to £50,000 Goods in Transit cover as standard." }
    ]
  },
  {
    town: "Wednesbury",
    slug: "wednesbury",
    county: "West Midlands",
    tier: 2,
    postcodes: ["WS10"],
    lat: 52.553,
    lng: -2.015,
    cazEnabled: false,
    cazNote: "Wednesbury has no Clean Air Zone charges.",
    travelInfo: "Immediate access to the M6 at Junction 9 and the Black Country Route (A454).",
    nearbyAreas: [{ name: "Walsall", slug: "walsall" }, { name: "West Bromwich", slug: "west-bromwich" }, { name: "Tipton", slug: "tipton" }],
    intro: "Jimmys Removals is your local moving expert in Wednesbury and the WS10 district. Whether you are moving from a traditional semi-detached house in Friar Park, a period terraced home near the historic Market Place, or a modern family estate near Gallagher Retail Park, we provide punctual moving services with tailored packing, furniture assembly, and secure storage options. Our trained porters handle heavy appliances and delicate items with equal care, ensuring your relocation is completely stress-free.",
    localKnowledge: "Wednesbury benefits from immediate proximity to M6 Junction 9. Our drivers utilize alternative routes via Darlaston and Woods Bank when motorway entry slip roads experience heavy freight queues, ensuring that house moves remain on schedule throughout the day.",
    faqs: [
      { question: "Do you cover all areas in WS10?", answer: "Yes, we cover central Wednesbury, Friar Park, Woods Bank, and surrounding areas." },
      { question: "Can you provide commercial deliveries from Wednesbury industrial parks?", answer: "Yes, we offer same-day pallet and commercial delivery services across the UK." },
      { question: "Are your removal porters DBS checked?", answer: "Yes, all our staff are DBS-checked and wear smart company uniforms." },
      { question: "Can you assist with packing delicate china?", answer: "Yes, our fragile packing service carefully wraps glassware and ceramics in protective materials." }
    ]
  },
  {
    town: "Willenhall",
    slug: "willenhall",
    county: "West Midlands",
    tier: 2,
    postcodes: ["WV12", "WV13"],
    lat: 52.585,
    lng: -2.054,
    cazEnabled: false,
    cazNote: "Willenhall is outside any Clean Air Zone.",
    travelInfo: "Connected via the A454 Keyway and A462, minutes from M6 Junction 10.",
    nearbyAreas: [{ name: "Wolverhampton", slug: "wolverhampton" }, { name: "Walsall", slug: "walsall" }, { name: "Bilston", slug: "bilston" }],
    intro: "Moving home in or out of Willenhall? Jimmys Removals provides dependable, insured domestic and commercial removals across the historic lock-making town. From Short Heath and New Invention to residential roads near Memorial Park and Fibbersley, our dedicated teams take meticulous care of your possessions, delivering courteous service, careful vehicle loading, and transparent upfront rates. We supply all boxes, bubble wrap, and furniture blankets required for a faultless moving experience.",
    localKnowledge: "Willenhall sits between Wolverhampton and Walsall along the Keyway (A454). Navigating the older residential avenues around Clarkes Lane and New Invention requires compact, responsive Luton vans that can reverse safely into tight residential driveways without damaging garden brickwork.",
    faqs: [
      { question: "Do you service New Invention and Short Heath?", answer: "Yes, we cover all WV12 and WV13 postcodes across Willenhall." },
      { question: "Can you move heavy safe boxes or specialist items?", answer: "Yes, we have specialized heavy-lift equipment suitable for safes, pianos, and machinery." },
      { question: "What is your hourly rate for man and van in Willenhall?", answer: "Our man and van rates start from £65/hour for 1 man and van with a 2-hour minimum." },
      { question: "Do you provide wardrobe cartons for clothing?", answer: "Yes, we provide hanging wardrobe boxes to transport suits and dresses without creasing." }
    ]
  },
  {
    town: "Bilston",
    slug: "bilston",
    county: "West Midlands",
    tier: 2,
    postcodes: ["WV14"],
    lat: 52.566,
    lng: -2.074,
    cazEnabled: false,
    cazNote: "Bilston does not operate a Clean Air Zone.",
    travelInfo: "Direct links via the Black Country Route (A463) and the A41 Oxford Street.",
    nearbyAreas: [{ name: "Wolverhampton", slug: "wolverhampton" }, { name: "Dudley", slug: "dudley" }, { name: "Wednesbury", slug: "wednesbury" }],
    intro: "Jimmys Removals provides experienced house removals, student transfers, and packing services across Bilston, Bradley, and Ettingshall. Famous for its historic open market and vibrant community spirit, Bilston offers great housing value. Our team delivers stress-free moves with clean Luton vans, protective furniture blankets, heavy-duty straps, and friendly, capable porters who treat your property as if it were their own throughout the moving process.",
    localKnowledge: "Bilston's road network connects directly onto the Black Country Route (A463), allowing quick transfers between Wolverhampton and the M6. In older streets near Mount Pleasant and Loxdale, on-street parking requires strategic morning van staging to keep the highway clear.",
    faqs: [
      { question: "Do you provide removals in Bradley and Ettingshall?", answer: "Yes, we cover the whole of Bilston including Bradley, Ettingshall, and Stowlawn." },
      { question: "Can you help move large American fridge freezers?", answer: "Yes, our team is equipped with specialized appliance dollies and door-removal tools." },
      { question: "Are quotes free and without obligation?", answer: "Yes, all our written quotations are 100% free with no obligation to book." },
      { question: "Do you offer packing services in Bilston?", answer: "Yes, we provide full-house, kitchen-only, and fragile-only packing services." }
    ]
  },
  {
    town: "Brierley Hill",
    slug: "brierley-hill",
    county: "West Midlands",
    tier: 2,
    postcodes: ["DY5"],
    lat: 52.483,
    lng: -2.119,
    cazEnabled: false,
    cazNote: "Brierley Hill has no Clean Air Zone charges.",
    travelInfo: "Connected via the A461, A4036, and Level Street near Merry Hill.",
    nearbyAreas: [{ name: "Dudley", slug: "dudley" }, { name: "Stourbridge", slug: "stourbridge" }, { name: "Kingswinford", slug: "kingswinford" }],
    intro: "For house removals, flat relocations, and secure storage solutions in Brierley Hill, Jimmys Removals offers an insured, dependable local service. From hilltop terraces along the High Street to contemporary waterfront apartments at the Waterfront and suburban homes in Brockmoor, Pensnett, and Quarry Bank, our team ensures your move is executed with precision, punctuality, and complete peace of mind. We provide tail-lift vans and full packing assistance for every customer.",
    localKnowledge: "Brierley Hill surrounds the major Merry Hill shopping complex and Waterfront commercial hub. Our drivers are skilled at bypassing retail traffic along Pedmore Road and Level Street, utilizing back corridors to ensure smooth, on-time arrivals at residential properties.",
    faqs: [
      { question: "Can you handle apartment moves at The Waterfront?", answer: "Yes, we regularly move residents into and out of Waterfront apartments with lift access." },
      { question: "Do you move properties in Quarry Bank and Pensnett?", answer: "Yes, we cover all DY5 addresses including Brockmoor, Pensnett, and Quarry Bank." },
      { question: "How do you protect furniture during rainy weather?", answer: "All furniture is blanket-wrapped and waterproof shrink-wrapped before leaving the property." },
      { question: "Can you help dismantle large wardrobes?", answer: "Yes, our movers carry tools to dismantle and reassemble all types of flat-pack furniture." }
    ]
  },
  {
    town: "Kingswinford",
    slug: "kingswinford",
    county: "West Midlands",
    tier: 2,
    postcodes: ["DY6"],
    lat: 52.498,
    lng: -2.164,
    cazEnabled: false,
    cazNote: "Kingswinford operates without Clean Air Zone fees.",
    travelInfo: "Easy access via the A449, A491, and A4101 towards Dudley and Wolverhampton.",
    nearbyAreas: [{ name: "Stourbridge", slug: "stourbridge" }, { name: "Dudley", slug: "dudley" }, { name: "Brierley Hill", slug: "brierley-hill" }],
    intro: "Jimmys Removals provides premium house removals and full packing services throughout Kingswinford and Wall Heath. Characterised by spacious semi-detached and detached family residences, quiet cul-de-sacs, and good schools, Kingswinford is a favoured residential location where our courteous, DBS-checked staff ensure an effortless move. We supply floor protection, wardrobe cartons, and furniture assembly tools so your transition is completely seamless from start to finish.",
    localKnowledge: "Kingswinford's quiet suburban layouts around Crestwood Park, Charterfields, and Wall Heath feature private driveways and wide cul-de-sacs. Our 3.5-tonne Luton vans reverse easily onto driveways, reducing the walking distance and keeping loading times remarkably swift.",
    faqs: [
      { question: "Do you cover Wall Heath and Swindon as well?", answer: "Yes, we cover Kingswinford, Wall Heath, and surrounding South Staffordshire borders." },
      { question: "Can you provide storage for Kingswinford homeowners?", answer: "Yes, we offer secure containerised storage with collection and redelivery." },
      { question: "Do you protect carpets inside the house?", answer: "Yes, we lay specialized floor runners across hallways and carpets on moving day." },
      { question: "Can you move pianos in Kingswinford?", answer: "Yes, we have specialised equipment to move upright pianos safely." }
    ]
  },
  {
    town: "Rowley Regis",
    slug: "rowley-regis",
    county: "West Midlands",
    tier: 2,
    postcodes: ["B65"],
    lat: 52.483,
    lng: -2.055,
    cazEnabled: false,
    cazNote: "Rowley Regis is outside any Clean Air Zone.",
    travelInfo: "High-level ridge connectivity via the A459 and A4100 towards M5 Junction 2.",
    nearbyAreas: [{ name: "Dudley", slug: "dudley" }, { name: "Halesowen", slug: "halesowen" }, { name: "Oldbury", slug: "oldbury" }],
    intro: "Need experienced house removals in Rowley Regis? Jimmys Removals understands the steep hills and historic communities of Blackheath, Springfield, and Turners Hill. We provide insured moving solutions with modern low-loader Luton vans designed to handle high-elevation terrain, narrow side streets, and stepped accessways safely. Our friendly, hardworking porters take care of all heavy lifting, ensuring your possessions arrive in pristine condition.",
    localKnowledge: "Sitting atop the Rowley Hills, Rowley Regis features some of the highest elevations in the West Midlands. Roads around Highfield and St Giles Church feature steep gradients requiring our drivers to use heavy wheel chocks and position vehicles carefully for safe tail-lift operation.",
    faqs: [
      { question: "How do you handle moves on steep slopes in Rowley Regis?", answer: "Our vehicles carry heavy wheel chocks and our porters use safety straps designed for hillside loading." },
      { question: "Do you cover Blackheath town centre addresses?", answer: "Yes, we cover B65 thoroughly including Blackheath, Springfield, and Old Hill borders." },
      { question: "Are your removals insured against accidental damage?", answer: "Yes, £50,000 Goods in Transit and £2,000,000 Public Liability insurance are included." },
      { question: "Can you remove unwanted furniture before the move?", answer: "Yes, we offer ethical furniture clearance and donation services." }
    ]
  },
  {
    town: "Cradley Heath",
    slug: "cradley-heath",
    county: "West Midlands",
    tier: 2,
    postcodes: ["B64"],
    lat: 52.472,
    lng: -2.083,
    cazEnabled: false,
    cazNote: "Cradley Heath is outside any Clean Air Zone.",
    travelInfo: "Connected via the A4100 High Street and Forge Lane towards the A456.",
    nearbyAreas: [{ name: "Halesowen", slug: "halesowen" }, { name: "Dudley", slug: "dudley" }, { name: "Rowley Regis", slug: "rowley-regis" }],
    intro: "Jimmys Removals delivers trusted domestic and commercial removals across Cradley Heath, Old Hill, and surrounding areas. Known for its rich industrial heritage and friendly community, Cradley Heath features traditional terraced properties, semi-detached homes, and modern estates where our professional porters provide polite, punctual, and reliable moving care. We supply quilted furniture blankets, floor runners, and tail-lift vans for every relocation.",
    localKnowledge: "Cradley Heath's layout combines historic industrial terraces with railway bridges and narrow entry alleys. Our team is adept at navigating restricted rear accessways to load garden furniture and outbuildings without causing obstruction to neighbouring properties.",
    faqs: [
      { question: "Do you cover Old Hill and Cradley?", answer: "Yes, we cover all B64 postcodes including Old Hill and surrounding border streets." },
      { question: "Can you assist with small flat moves in Cradley Heath?", answer: "Yes, our man and van service is ideal for 1-bed flats and studio moves." },
      { question: "How are mattresses and sofas protected?", answer: "We use heavy-duty quilted transit covers and heavy-gauge polythene bags." },
      { question: "Do you work on bank holiday weekends?", answer: "Yes, we operate 7 days a week including most bank holiday periods." }
    ]
  },
  {
    town: "Bloxwich",
    slug: "bloxwich",
    county: "West Midlands",
    tier: 2,
    postcodes: ["WS3"],
    lat: 52.614,
    lng: -2.008,
    cazEnabled: false,
    cazNote: "Bloxwich operates without Clean Air Zone surcharges.",
    travelInfo: "Direct links via the A34 Stafford Road and close to M6 Junction 11.",
    nearbyAreas: [{ name: "Walsall", slug: "walsall" }, { name: "Cannock", slug: "cannock" }, { name: "Willenhall", slug: "willenhall" }],
    intro: "Planning a home move in Bloxwich? Jimmys Removals delivers professional, fully insured removals throughout WS3. From character properties near the historic Bloxwich Green and High Street to newer developments around Turnberry Road and Leamore, our moving specialists ensure your household items are moved safely, cleanly, and on budget. With our experienced team handling dismantling, loading, and placement, your move is simple and stress-free.",
    localKnowledge: "Bloxwich sits along the northern reach of the A34 connecting Walsall to Cannock. Residential roads around King George V Playing Fields and Blakenall Heath have varied road widths, making our 3.5-tonne Luton vans ideal for accessing driveways without blocking bus routes.",
    faqs: [
      { question: "Do you cover Leamore and Blakenall?", answer: "Yes, we service all WS3 locations including Leamore, Blakenall Heath, and Turnberry." },
      { question: "Can you supply boxes and bubble wrap in Bloxwich?", answer: "Yes, we deliver comprehensive packing kits directly to your doorstep." },
      { question: "What size vans do you operate in Bloxwich?", answer: "We use spacious 3.5-tonne Luton low-loaders equipped with tail lifts." },
      { question: "Are your moving staff experienced?", answer: "All our porters are fully trained, uniformed, and DBS-checked professionals." }
    ]
  },
  {
    town: "Aldridge",
    slug: "aldridge",
    county: "West Midlands",
    tier: 2,
    postcodes: ["WS9"],
    lat: 52.607,
    lng: -1.919,
    cazEnabled: false,
    cazNote: "Aldridge is outside any Clean Air Zone.",
    travelInfo: "Connected via the A454, A452 Chester Road, and close to the M6 Toll.",
    nearbyAreas: [{ name: "Walsall", slug: "walsall" }, { name: "Sutton Coldfield", slug: "sutton-coldfield" }, { name: "Lichfield", slug: "lichfield" }],
    intro: "Jimmys Removals provides first-class house removals, furniture dismantling, and bespoke packing services in Aldridge. With its charming village atmosphere, prestigious properties around the Croft, and leafy residential avenues towards Leighswood and Stubbers Green, Aldridge is a prime residential location. Our polite, careful team treats your furniture with the highest standard of care, ensuring floors are protected and items are blanket-wrapped for transit.",
    localKnowledge: "Aldridge features generous detached homes and bungalows with wide driveways, particularly along Erdington Road and Bosty Lane. We utilize floor runners to protect oak flooring and provide comprehensive packing for high-value antiques, mirrors, and garden ornaments.",
    faqs: [
      { question: "Do you service Rushall and Walsall Wood from Aldridge?", answer: "Yes, we cover all WS9 postcodes including Rushall, Walsall Wood, and Streetly borders." },
      { question: "Can you dismantle large garden furniture or trampolines?", answer: "Yes, our team can dismantle and rebuild outdoor play sets, trampolines, and garden suites." },
      { question: "Do you provide insurance for fragile antiques in Aldridge?", answer: "Yes, £50,000 Goods in Transit insurance protects your declared fragile items." },
      { question: "Can you pack our entire house the day before moving?", answer: "Yes, our full packing service packs everything the day prior to completion." }
    ]
  },
  {
    town: "Erdington",
    slug: "erdington",
    county: "West Midlands",
    tier: 2,
    postcodes: ["B23", "B24"],
    lat: 52.525,
    lng: -1.84,
    cazEnabled: false,
    cazNote: "Erdington is outside the Birmingham CAZ boundary.",
    travelInfo: "Quick access via the A38 Tyburn Road, A5127 Gravelly Hill, and Spaghetti Junction.",
    nearbyAreas: [{ name: "Birmingham", slug: "birmingham" }, { name: "Sutton Coldfield", slug: "sutton-coldfield" }, { name: "West Bromwich", slug: "west-bromwich" }],
    intro: "Jimmys Removals provides reliable house and flat removals across Erdington. Centred on its bustling high street, grand Victorian villas along Gravelly Hill, and suburban avenues in Short Heath and Stockland Green, Erdington is a vibrant north Birmingham community. We offer transparent pricing, punctual arrival, and careful loading for every move, protecting your mattresses, sofas, and delicate possessions with heavy-duty quilted covers.",
    localKnowledge: "Erdington borders Spaghetti Junction (M6 Junction 6) and the A38. Our drivers know how to steer clear of bottlenecks near Salford Circus, choosing quiet residential routes around Brookvale Park and Highcroft to keep moving schedules completely on track.",
    faqs: [
      { question: "Do you cover Gravelly Hill and Stockland Green?", answer: "Yes, we cover all B23 and B24 postcodes throughout Erdington." },
      { question: "Are your vans compliant with the Birmingham Clean Air Zone?", answer: "Yes, our entire fleet is Euro 6 compliant with zero CAZ fees." },
      { question: "Can you help move heavy appliances from Victorian cellars?", answer: "Yes, our porters have the lifting equipment to navigate steep cellar staircases." },
      { question: "Do you offer flexible hourly rates in Erdington?", answer: "Yes, our man and van hourly options offer great flexibility for smaller moves." }
    ]
  },
  {
    town: "Kings Heath",
    slug: "kings-heath",
    county: "West Midlands",
    tier: 2,
    postcodes: ["B14"],
    lat: 52.434,
    lng: -1.894,
    cazEnabled: false,
    cazNote: "Kings Heath is outside the Clean Air Zone, though our vans are fully compliant.",
    travelInfo: "Main artery via the A435 Alcester Road connecting south towards the M42.",
    nearbyAreas: [{ name: "Moseley", slug: "moseley" }, { name: "Birmingham", slug: "birmingham" }, { name: "Selly Oak", slug: "selly-oak" }],
    intro: "Moving to or from Kings Heath? Jimmys Removals provides bespoke house removals, flat transfers, and packing across B14. Known for its independent shops, vibrant arts scene, and Victorian and Edwardian terraced avenues, Kings Heath demands an agile removals team capable of managing on-street parking and tight period hallways. Our courteous team handles every item with care, using protective covers and stair dollies.",
    localKnowledge: "Kings Heath features Low Traffic Neighbourhood (LTN) modal filters and bus priority lanes along Alcester Road. Our drivers are thoroughly briefed on active travel planters and bollards, selecting approved access routes to avoid dead-ends when approaching residential streets.",
    faqs: [
      { question: "How do you handle LTN road closures in Kings Heath?", answer: "Our drivers are fully updated on local council traffic schemes to navigate permitted access routes." },
      { question: "Do you move upright pianos in Kings Heath period homes?", answer: "Yes, we specialize in upright piano moves using protective covers and dollies." },
      { question: "Can you help with parking arrangements outside terraced houses?", answer: "We advise customers on reserving cones or applying for bay dispensations where needed." },
      { question: "Are your movers polite and respectful?", answer: "Yes, our team is praised for courteous, friendly, and patient customer care." }
    ]
  },
  {
    town: "Selly Oak",
    slug: "selly-oak",
    county: "West Midlands",
    tier: 2,
    postcodes: ["B29"],
    lat: 52.44,
    lng: -1.936,
    cazEnabled: false,
    cazNote: "Selly Oak is outside the Clean Air Zone.",
    travelInfo: "Direct links via the A38 Bristol Road and the new Selly Oak bypass.",
    nearbyAreas: [{ name: "Harborne", slug: "harborne" }, { name: "Birmingham", slug: "birmingham" }, { name: "Northfield", slug: "northfield" }],
    intro: "Jimmys Removals is the leading removals specialist in Selly Oak, serving students, university lecturers, medical professionals, and local families. Spanning bustling student roads near the University of Birmingham to quiet family avenues in Bournville and Ten Acres, we provide efficient removals, term-time student storage, and professional packing services. Our teams make moving into halls or suburban homes fast, affordable, and dependable.",
    localKnowledge: "Selly Oak experiences major seasonal move peaks in June, July, and September as university tenancies turn over. Narrow terraced streets like Dawlish Road and Heeley Road get congested with cars, so we schedule early morning arrivals to secure parking and complete loading swiftly.",
    faqs: [
      { question: "Do you offer student discounts for moves in Selly Oak?", answer: "Yes, we provide student-friendly rates and van-sharing options for campus relocations." },
      { question: "Can you store our boxes over the summer holiday?", answer: "Yes, we collect your belongings, store them securely, and redeliver for the autumn term." },
      { question: "Do you service Queen Elizabeth Hospital staff relocations?", answer: "Yes, we regularly assist NHS doctors and nursing staff moving near the QE hospital." },
      { question: "Are your removal vans clean and well-maintained?", answer: "Our vans are cleaned after every job and fully equipped with blankets and ties." }
    ]
  },
  {
    town: "Harborne",
    slug: "harborne",
    county: "West Midlands",
    tier: 2,
    postcodes: ["B17"],
    lat: 52.46,
    lng: -1.961,
    cazEnabled: false,
    cazNote: "Harborne is outside the Birmingham CAZ.",
    travelInfo: "Connected via the A4040 Harborne Park Road and B4124 High Street.",
    nearbyAreas: [{ name: "Selly Oak", slug: "selly-oak" }, { name: "Birmingham", slug: "birmingham" }, { name: "Moseley", slug: "moseley" }],
    intro: "Jimmys Removals delivers premier house removals, flat moves, and fine art relocation throughout Harborne. Revered for its lively High Street, excellent restaurants, and charming Victorian artisan cottages alongside substantial Moor Pool and Court Oak residences, Harborne requires an experienced team that treats your home with meticulous care. We supply floor runners, quilted sofa covers, and dismantling tools for a flawless moving day.",
    localKnowledge: "Harborne includes the historic Moor Pool garden suburb with narrow winding lanes, tight corners, and strict conservation guidelines. Our drivers use compact 3.5-tonne Luton vehicles to protect manicured verges and hedgerows, utilizing protective floor runners inside homes.",
    faqs: [
      { question: "Do you have experience moving homes in Moor Pool?", answer: "Yes, we know the conservation area well and use appropriately sized vehicles for narrow lanes." },
      { question: "Can you move high-value artwork and antiques in Harborne?", answer: "Yes, we provide custom crate packing and quilted blankets for fine furnishings." },
      { question: "Do you dismantle luxury beds and wardrobes?", answer: "Yes, our porters carry full toolsets to dismantle and rebuild complex furniture." },
      { question: "Are quotes fixed price in Harborne?", answer: "Yes, we provide fully guaranteed fixed quotes with zero hidden extras." }
    ]
  },
  {
    town: "Moseley",
    slug: "moseley",
    county: "West Midlands",
    tier: 2,
    postcodes: ["B13"],
    lat: 52.449,
    lng: -1.888,
    cazEnabled: false,
    cazNote: "Moseley is outside the Clean Air Zone.",
    travelInfo: "Main route via the A435 Alcester Road and Salisbury Road.",
    nearbyAreas: [{ name: "Kings Heath", slug: "kings-heath" }, { name: "Birmingham", slug: "birmingham" }, { name: "Harborne", slug: "harborne" }],
    intro: "Jimmys Removals provides bespoke domestic removals and packing services across the bohemian village of Moseley. Famous for Victorian and Edwardian architecture, private parks, and substantial detached villas along Salisbury Road and Wake Green, Moseley demands a removals service with high standards of customer care and craftsmanship. We protect period wood floors, stained glass, and delicate heirlooms with tailored blankets and careful portering.",
    localKnowledge: "Period homes in Moseley frequently feature grand staircases, stained glass vestibules, and high ceilings. Our crew uses specialized door frame pads and neoprene floor runners to safeguard historic architectural features while manoeuvring heavy furniture.",
    faqs: [
      { question: "Do you protect period woodwork and stained glass in Moseley?", answer: "Yes, we wrap bannisters, doorways, and delicate glass fixtures in protective padding." },
      { question: "Can you pack our collection of books and vinyl records?", answer: "Yes, we pack heavy collections into reinforced small cartons that prevent overload." },
      { question: "Do you provide full house clearances in Moseley?", answer: "Yes, we handle respectful, eco-friendly house and estate clearances." },
      { question: "What insurance do you carry for Moseley moves?", answer: "We provide £50,000 Goods in Transit and £2,000,000 Public Liability insurance." }
    ]
  },
  {
    town: "Northfield",
    slug: "northfield",
    county: "West Midlands",
    tier: 2,
    postcodes: ["B31"],
    lat: 52.414,
    lng: -1.97,
    cazEnabled: false,
    cazNote: "Northfield is outside the Clean Air Zone.",
    travelInfo: "Quick access via the A38 Bristol Road South towards M5 Junction 4.",
    nearbyAreas: [{ name: "Selly Oak", slug: "selly-oak" }, { name: "Bromsgrove", slug: "bromsgrove" }, { name: "Birmingham", slug: "birmingham" }],
    intro: "For dependable house removals, flat moves, and storage in Northfield, Jimmys Removals delivers top-rated service. From suburban semi-detached homes near Victoria Common to modern housing along the Bristol Road South corridor and Longbridge regeneration area, our insured team ensures your home move is carried out smoothly, safely, and punctually. We provide full packing options, furniture disassembly, and tail-lift Luton vans.",
    localKnowledge: "Northfield offers easy connectivity down the A38 toward the Lickey Hills and the M5 at Junction 4. In established residential avenues around West Heath and Turves Green, driveway access is generally good, allowing fast loading and unloading by our 2 or 3-man crews.",
    faqs: [
      { question: "Do you cover West Heath and Longbridge from Northfield?", answer: "Yes, we cover all B31 postcodes including Longbridge and West Heath." },
      { question: "Can you assist with long-distance moves from Northfield?", answer: "Yes, we specialize in direct point-to-point UK removals with dedicated vans." },
      { question: "Do you supply packing materials in Northfield?", answer: "Yes, boxes, tape, and bubble wrap can be delivered directly to your home." },
      { question: "How do you calculate your prices?", answer: "We base prices on the volume of goods, access conditions, and transit distance." }
    ]
  },
  {
    town: "Shirley",
    slug: "shirley",
    county: "West Midlands",
    tier: 2,
    postcodes: ["B90"],
    lat: 52.404,
    lng: -1.821,
    cazEnabled: false,
    cazNote: "Shirley has no Clean Air Zone charges.",
    travelInfo: "Direct links via the A34 Stratford Road to M42 Junction 4.",
    nearbyAreas: [{ name: "Solihull", slug: "solihull" }, { name: "Birmingham", slug: "birmingham" }, { name: "Redditch", slug: "redditch" }],
    intro: "Jimmys Removals provides premium house removals and packing across Shirley and Monkspath. As a highly desirable part of the Solihull borough, Shirley combines excellent shopping along Parkgate, modern family estates in Cheswick Green and Dickens Heath, and classic 1930s avenues where our polite removals team delivers first-class care. We ensure your furniture is blanket-wrapped and transported securely with full insurance coverage.",
    localKnowledge: "Shirley is centred on the busy A34 Stratford Road. Our drivers know how to bypass commuter queues during peak shopping hours, navigating residential estates in Monkspath and Dickens Heath with precision to ensure timely move execution.",
    faqs: [
      { question: "Do you cover Dickens Heath and Cheswick Green?", answer: "Yes, we cover all residential communities across the B90 district." },
      { question: "Can you assemble flat-pack furniture in our new Shirley home?", answer: "Yes, our porters can reassemble beds, tables, and wardrobes on moving day." },
      { question: "Are your quotes all-inclusive?", answer: "Yes, our quotes clearly outline all costs with zero hidden surcharges." },
      { question: "Do you offer white-glove packing in Shirley?", answer: "Yes, we provide full professional packing using premium double-walled cartons." }
    ]
  },
  {
    town: "Redditch",
    slug: "redditch",
    county: "Worcestershire",
    tier: 2,
    postcodes: ["B97", "B98"],
    lat: 52.306,
    lng: -1.942,
    cazEnabled: false,
    cazNote: "Redditch is outside any Clean Air Zone.",
    travelInfo: "Excellent dual-carriageway access via the A441, A435, and M42 Junction 2.",
    nearbyAreas: [{ name: "Bromsgrove", slug: "bromsgrove" }, { name: "Shirley", slug: "shirley" }, { name: "Solihull", slug: "solihull" }],
    intro: "Jimmys Removals provides trusted house removals, commercial moves, and containerised storage in Redditch. From character homes in Webheath and Astwood Bank to modern planned developments in Church Hill, Matchborough, and Walkwood, our team delivers seamless, insured moving solutions across north Worcestershire. We provide full furniture protection, floor runners, and tail-lift vans for a comfortable moving experience.",
    localKnowledge: "Redditch is famous for its comprehensive highway network with fast dual carriageways like the Alvechurch Highway and Coventry Highway. Navigating cul-de-sacs in new-town estates requires experienced drivers who position Luton vehicles without blocking community parking bays.",
    faqs: [
      { question: "Do you cover Astwood Bank and Webheath?", answer: "Yes, we cover all B97 and B98 addresses in Redditch and surrounding villages." },
      { question: "Can you provide storage for Redditch residents?", answer: "Yes, our secure containerised facility provides clean, alarmed storage." },
      { question: "Do you handle office relocations in Redditch industrial parks?", answer: "Yes, we handle office and warehouse relocations with minimal downtime." },
      { question: "Are your staff DBS checked?", answer: "Yes, all our removals personnel are DBS-checked and professionally trained." }
    ]
  },
  {
    town: "Bromsgrove",
    slug: "bromsgrove",
    county: "Worcestershire",
    tier: 2,
    postcodes: ["B60", "B61"],
    lat: 52.335,
    lng: -2.059,
    cazEnabled: false,
    cazNote: "Bromsgrove operates without a Clean Air Zone.",
    travelInfo: "Outstanding motorway links at M5 Junction 4/4A and M42 Junction 1.",
    nearbyAreas: [{ name: "Redditch", slug: "redditch" }, { name: "Northfield", slug: "northfield" }, { name: "Halesowen", slug: "halesowen" }],
    intro: "Planning a house move in Bromsgrove? Jimmys Removals delivers an outstanding domestic moving and packing service. From elegant period residences near Bromsgrove School and Finstall to family semi-detached properties in Aston Fields, Catshill, and Marlbrook, our polite team ensures that your transition is executed with utmost care. We offer complete wardrobe packing, furniture assembly, and full transit insurance coverage.",
    localKnowledge: "Bromsgrove sits strategically between the M5 and M42 motorways. In leafy semi-rural lanes around Blackwell, Barnt Green, and Stoke Prior, gravel drives and mature tree canopies require our drivers to manoeuvre low-loader Luton vans with care, preserving manicured grounds.",
    faqs: [
      { question: "Do you cover Barnt Green and Blackwell?", answer: "Yes, we regularly conduct moves in Barnt Green, Blackwell, and surrounding villages." },
      { question: "Can you handle moves from Bromsgrove to London?", answer: "Yes, we provide dedicated long-distance relocations throughout the UK." },
      { question: "Do you lay floor protectors on carpets and tiles?", answer: "Yes, our team uses heavy-duty walkway runners to keep your floors spotless." },
      { question: "Can you pack fragile kitchenware in Bromsgrove?", answer: "Yes, our fragile packing service takes care of all glassware, china, and ornaments." }
    ]
  },
  {
    town: "Tamworth",
    slug: "tamworth",
    county: "Staffordshire",
    tier: 2,
    postcodes: ["B77", "B78", "B79"],
    lat: 52.634,
    lng: -1.695,
    cazEnabled: false,
    cazNote: "Tamworth is outside any Clean Air Zone.",
    travelInfo: "Superb connectivity via the A5 bypass, A51, and M42 Junction 10.",
    nearbyAreas: [{ name: "Sutton Coldfield", slug: "sutton-coldfield" }, { name: "Lichfield", slug: "lichfield" }, { name: "Nuneaton", slug: "nuneaton" }],
    intro: "Jimmys Removals provides reliable, insured house removals, furniture assembly, and packing across Tamworth. Steeped in Mercian history, Tamworth features riverside residences, established estates in Belgrave and Amington, and modern developments near Ventura Retail Park. Our experienced team ensures your move proceeds smoothly with clean Luton vans, careful loading, and guaranteed fixed pricing.",
    localKnowledge: "Tamworth is framed by the busy A5 bypass and M42 Junction 10. Our drivers monitor retail traffic around Ventura Park, opting for arterial routes via Bitterscote or Fazeley to maintain punctual delivery times at residential properties.",
    faqs: [
      { question: "Do you cover Amington and Dosthill in Tamworth?", answer: "Yes, we cover all B77, B78, and B79 postcodes across Tamworth." },
      { question: "Can you move heavy garden furniture and sheds?", answer: "Yes, we can dismantle and move heavy garden suites, planters, and timber sheds." },
      { question: "Do you provide moving boxes in Tamworth?", answer: "Yes, we deliver robust double-walled cartons, tape, and bubble wrap." },
      { question: "Are your vans clean and fully equipped?", answer: "Yes, all our Luton vans carry clean blankets, mattress bags, and ties." }
    ]
  },
  {
    town: "Lichfield",
    slug: "lichfield",
    county: "Staffordshire",
    tier: 2,
    postcodes: ["WS13", "WS14"],
    lat: 52.684,
    lng: -1.826,
    cazEnabled: false,
    cazNote: "Lichfield operates without Clean Air Zone fees.",
    travelInfo: "Quick access via the A38, A51, and the M6 Toll corridor.",
    nearbyAreas: [{ name: "Sutton Coldfield", slug: "sutton-coldfield" }, { name: "Tamworth", slug: "tamworth" }, { name: "Cannock", slug: "cannock" }],
    intro: "Jimmys Removals is proud to offer bespoke house removals, piano transport, and packing services across the cathedral city of Lichfield. Famous for its three-spired cathedral, historic cobbled streets, and sought-after residential avenues in Boley Park and Darwin Park, Lichfield demands an experienced removals team with an eye for detail. We treat every antique and personal treasure with the greatest care.",
    localKnowledge: "Lichfield's historic centre has pedestrianised zones, narrow archways, and strict weight-restricted streets around the Cathedral Close. Our drivers use agile 3.5-tonne Luton vans to navigate conservation streets safely, without disrupting historic stone curbs or residential parking.",
    faqs: [
      { question: "Do you have experience in Lichfield's historic city centre?", answer: "Yes, we know how to navigate tight historic lanes and arrange vehicle loading permits." },
      { question: "Can you move upright and grand pianos in Lichfield?", answer: "Yes, our specialist team uses piano shoes, transit covers, and tail lifts." },
      { question: "Do you cover Boley Park and Darwin Park?", answer: "Yes, we frequently conduct moves in all modern and established Lichfield estates." },
      { question: "What insurance is included with Lichfield moves?", answer: "All moves include £50,000 Goods in Transit and £2,000,000 Public Liability insurance." }
    ]
  },
  {
    town: "Cannock",
    slug: "cannock",
    county: "Staffordshire",
    tier: 2,
    postcodes: ["WS11", "WS12"],
    lat: 52.689,
    lng: -2.032,
    cazEnabled: false,
    cazNote: "Cannock is outside any Clean Air Zone.",
    travelInfo: "Direct links via the A5, A34, and M6 Toll Junctions T7/T8, and M6 Junctions 11/12.",
    nearbyAreas: [{ name: "Bloxwich", slug: "bloxwich" }, { name: "Walsall", slug: "walsall" }, { name: "Lichfield", slug: "lichfield" }],
    intro: "For trusted house removals, commercial deliveries, and clearance services in Cannock and Hednesford, Jimmys Removals delivers an efficient, reliable service. Situated on the edge of Cannock Chase Area of Outstanding Natural Beauty, Cannock combines mining heritage communities, modern family estates in Hawkesyard, and bustling shopping quarters. We ensure every move is handled safely, cleanly, and on schedule.",
    localKnowledge: "Cannock's road network connects directly to the M6 Toll and M6 Junction 11. Roads climbing into Hednesford and towards the Chase feature varied gradients, where our drivers ensure safe vehicle positioning and careful loading of heavy household furniture.",
    faqs: [
      { question: "Do you cover Hednesford and Heath Hayes?", answer: "Yes, we cover all WS11 and WS12 postcodes across the Cannock district." },
      { question: "Can you assist with moves near Cannock Chase?", answer: "Yes, we regularly move properties bordering the rural Chase with great care." },
      { question: "Do you provide clearance services in Cannock?", answer: "Yes, we offer licensed house and garden clearance with ethical recycling." },
      { question: "Are your moving quotes guaranteed?", answer: "Yes, all our quotations are fixed and transparent with zero hidden fees." }
    ]
  },
  {
    town: "Nuneaton",
    slug: "nuneaton",
    county: "Warwickshire",
    tier: 2,
    postcodes: ["CV10", "CV11"],
    lat: 52.523,
    lng: -1.468,
    cazEnabled: false,
    cazNote: "Nuneaton operates without a Clean Air Zone.",
    travelInfo: "Connected via the A444, A47, and close to the M6 Junction 3.",
    nearbyAreas: [{ name: "Coventry", slug: "coventry" }, { name: "Bedworth", slug: "bedworth" }, { name: "Tamworth", slug: "tamworth" }],
    intro: "Jimmys Removals provides professional house removals, flat moves, and student relocations throughout Nuneaton. As northern Warwickshire's largest town, Nuneaton offers diverse housing from Victorian terraces in Abbey Green to modern family developments in Weddington, St Nicolas Park, and Whitestone. Our experienced porters ensure your possessions arrive safely, backed by full insurance and transparent fixed pricing.",
    localKnowledge: "Nuneaton is linked to Coventry by the A444 corridor. In established residential avenues around Weddington and Horeston Grange, private driveways provide straightforward van access, while our crew is adept at managing tighter road widths near the town centre.",
    faqs: [
      { question: "Do you cover Weddington and Whitestone in Nuneaton?", answer: "Yes, we cover all CV10 and CV11 addresses across Nuneaton." },
      { question: "Can you help move from Nuneaton to London or Manchester?", answer: "Yes, our dedicated long-distance removal service delivers direct across the UK." },
      { question: "Do you dismantle flat-pack beds and wardrobes?", answer: "Yes, our team carries full toolsets to dismantle and assemble furniture." },
      { question: "Are your packing boxes heavy duty?", answer: "Yes, we supply strong double-walled corrugated cardboard boxes for moves." }
    ]
  },
  {
    town: "Bedworth",
    slug: "bedworth",
    county: "Warwickshire",
    tier: 2,
    postcodes: ["CV12"],
    lat: 52.477,
    lng: -1.477,
    cazEnabled: false,
    cazNote: "Bedworth has no Clean Air Zone charges.",
    travelInfo: "Immediate access to the M6 at Junction 3 and the A444 bypass.",
    nearbyAreas: [{ name: "Coventry", slug: "coventry" }, { name: "Nuneaton", slug: "nuneaton" }, { name: "Solihull", slug: "solihull" }],
    intro: "Moving in Bedworth? Jimmys Removals offers an insured, affordable, and punctual removals service across CV12. From historic miners' cottages and peaceful avenues in Exhall and Bulkington to modern residential cul-de-sacs near the Miners Welfare Park, our DBS-checked team treats your furnishings with total dedication. We provide tail-lift Luton vans, protective blankets, and experienced porters for a seamless transition.",
    localKnowledge: "Bedworth sits directly beside M6 Junction 3. Our drivers use local knowledge to bypass peak roundabout queues connecting the A444 into Coventry, ensuring that moving vans maintain reliable, punctual schedules throughout your moving day.",
    faqs: [
      { question: "Do you service Bulkington and Exhall?", answer: "Yes, we cover Bedworth, Bulkington, Exhall, and surrounding Warwickshire borders." },
      { question: "How much notice is needed to book a move in Bedworth?", answer: "We recommend 1-2 weeks notice, though short-notice moves are accommodated when possible." },
      { question: "Are your movers insured for breakages?", answer: "Yes, £50,000 Goods in Transit insurance protects your possessions." },
      { question: "Do you offer man and van services in Bedworth?", answer: "Yes, flexible hourly or fixed man and van rates are available for smaller moves." }
    ]
  },
  {
    town: "Leamington Spa",
    slug: "leamington-spa",
    county: "Warwickshire",
    tier: 2,
    postcodes: ["CV31", "CV32", "CV33"],
    lat: 52.296,
    lng: -1.534,
    cazEnabled: false,
    cazNote: "Leamington Spa operates without a Clean Air Zone.",
    travelInfo: "Direct links via the A452, A46 bypass, and M40 Junctions 13 and 14.",
    nearbyAreas: [{ name: "Coventry", slug: "coventry" }, { name: "Solihull", slug: "solihull" }, { name: "Birmingham", slug: "birmingham" }],
    intro: "Jimmys Removals provides bespoke house removals, student relocations, and fine art transport across Royal Leamington Spa. Renowned for its stunning Regency architecture, wide boulevards, and popular student communities serving the University of Warwick, Leamington Spa requires high standards of care. Our experienced porters use floor runners, banister wraps, and padded covers to protect your property and ensure a flawless move.",
    localKnowledge: "Leamington Spa's historic Regency terraces in the town centre and around Clarendon Square feature high ceilings, sweeping spiral staircases, and multi-storey layouts. Our crew is experienced in navigating oversized furniture down narrow internal stairs without scuffing ornate plaster cornices or delicate wall panelling.",
    faqs: [
      { question: "Do you handle student moves for University of Warwick in Leamington?", answer: "Yes, Leamington is a major student hub and we provide term-time moves and summer storage." },
      { question: "How do you protect Regency properties in Leamington Spa?", answer: "We use corner guards, banister wraps, and floor runners to safeguard delicate period features." },
      { question: "Do you cover Warwick and Kenilworth as well?", answer: "Yes, we regularly conduct moves across Leamington Spa, Warwick, and Kenilworth." },
      { question: "Can you provide a full packing service?", answer: "Yes, our team can carefully pack your entire home with premium double-walled cartons." }
    ]
  }
];

// Helper to expand any intro that has less than 125 words
function expandIntro(town: TownDefinition): string {
  // Town specific detailed additions ensuring 125-160 words each
  const additions: Record<string, string> = {
    wolverhampton: " Whether you are moving from a suburban semi-detached house, an executive detached property, or a modern apartment, our removal porters handle the loading, transit, and unloading with meticulous care and attention to detail. Every customer receives our comprehensive service guarantee, protective mattress bags, and clear fixed-rate quotation.",
    coventry: " Our moving consultants work with you from initial inquiry to completion day, offering transparent advice on vehicle sizes, packing boxes, and time windows so your transition into your new Coventry home is completely effortless and reliable. We supply hanging wardrobe boxes, sofa protectors, and floor runners for every move.",
    solihull: " From initial site survey to the final placement of furniture in your chosen rooms, our professional team ensures every aspect of your Solihull move is managed with precision, courtesy, and exceptional reliability. We take extra precautions with manicured driveways, delicate hardwood flooring, and high-value antique furniture.",
    dudley: " Our dedicated team takes care of every detail, from protecting carpets and banisters to reassembling dining sets and beds, ensuring your moving day across the Black Country proceeds smoothly from start to finish. We bring specialised climbing equipment and heavy-duty ramps for properties with stepped or hillside approaches.",
    walsall: " Our experienced removal teams take pride in delivering a prompt, respectful, and fully insured service, whether you are relocating locally within the borough or moving across the country to a new destination. We provide clean Luton vans, heavy furniture blankets, and full packing services.",
    "west-bromwich": " We offer bespoke domestic moving packages, packing supplies, and expert furniture dismantling to ensure your West Bromwich house move is executed safely, on schedule, and within your agreed moving budget. Our team is fully insured with up to £50,000 Goods in Transit cover on every journey.",
    "sutton-coldfield": " With our experienced moving porters, clean modern vehicles, and comprehensive transit insurance, you can rest assured that your family home move in the Royal Town of Sutton Coldfield will be executed to the highest standards. We treat every antique and decorative heirloom with utmost care.",
    stourbridge: " From careful handling of fragile crystal and glassware to dismantling large wardrobes, our dedicated movers provide a polite, stress-free moving service tailored to your personal requirements across Stourbridge. We operate seven days a week with transparent, all-inclusive pricing.",
    halesowen: " We provide a full range of domestic moving services, from fragile-only packing to full house moves and secure containerised storage, ensuring that every transition in Halesowen is executed with skill, courtesy, and complete insurance protection. Our Luton vans navigate steep local residential avenues with absolute ease and stability.",
    oldbury: " Our experienced team assists with every step of the moving journey, from supplying heavy-duty double-walled boxes to dismantling beds and placing furniture directly into your chosen rooms at your new property. We arrive punctually with all necessary tools, mattress protectors, and floor coverings.",
    smethwick: " From small man and van flat moves to complete family house relocations, we provide all the protective blankets, mattress covers, and strapping required to safeguard your belongings throughout transit. We know how to manage narrow stairwells, curbside parking, and tight Victorian accessways safely and efficiently.",
    tipton: " Our moving crew takes great pride in offering dependable, friendly, and hardworking removals across Tipton, ensuring that all large furniture, appliances, and delicate items arrive securely at your new home. We provide upfront fixed quotations with zero hidden fuel charges or surprise extras.",
    wednesbury: " We understand that moving home can feel overwhelming, which is why our courteous crew arrives on time, works methodically, and handles every piece of furniture with total professionalism throughout your Wednesbury move. We also offer full packing and furniture reassembly options for total convenience.",
    willenhall: " From our initial fixed quotation to the final sign-off, our team delivers transparent pricing, respectful communication, and reliable van transport for domestic and commercial relocations across Willenhall. Our 3.5-tonne Luton vehicles are ideally sized to navigate local residential roads with speed and safety.",
    bilston: " Whether you need a full house removal, assistance moving heavy kitchen white goods, or student transport, our professional team delivers a punctual and insured service designed to make your Bilston move simple. We wrap all furniture in thick transit blankets and secure items with heavy webbing straps.",
    "brierley-hill": " We combine modern clean vehicles with experienced moving technicians who handle stairs, narrow access, and heavy furniture with ease, ensuring your Brierley Hill relocation is completed efficiently. Our services include optional packing materials, furniture disassembly, and secure storage solutions.",
    kingswinford: " Our complete removals service includes optional professional packing, protective carpet runners, and careful furniture reassembly, giving Kingswinford residents total peace of mind on moving day. We treat your property with meticulous respect and ensure your transition is completed with zero hassle.",
    "rowley-regis": " With specialized hill-parking protocols, robust tail lifts, and experienced staff, we ensure that moves in Rowley Regis are carried out safely, without delay, and with total respect for your personal belongings. We provide £50,000 Goods in Transit cover and operate seven days a week.",
    "cradley-heath": " Whether you are downsizing, purchasing your first property, or relocating office premises in Cradley Heath, our polite team ensures that your transition is executed with maximum care and minimum fuss. We supply heavy-duty double-walled boxes and protective transit blankets for every item.",
    bloxwich: " Our removals team provides complete support on moving day, loading items securely and delivering them directly to your new address with zero hidden fees and full goods in transit protection. We take the stress out of moving with friendly porters, clean vans, and punctual timing.",
    aldridge: " From single item transfers to substantial multi-bedroom family home relocations, our team brings the equipment, expertise, and courteous approach required for a truly seamless Aldridge move. We lay protective floor runners, wrap delicate furnishings, and handle every detail with pride.",
    erdington: " Our moving specialists ensure that your furniture, electronics, and boxes are packed and secured with care, providing a dependable, cost-effective service for every resident across Erdington. We operate 7 days a week with flexible booking windows and clear, fixed-price quotations.",
    "kings-heath": " We take the worry out of moving home in Kings Heath, offering complete packing solutions, experienced porters, and modern low-emission vehicles that keep your moving day running on schedule. We are fully familiar with local road layouts, parking considerations, and period home staircases.",
    "selly-oak": " From university student term moves to family relocations across Bournville and Ten Acres, our team delivers clean vehicles, hardworking porters, and affordable rates tailored to your specific moving requirements. We provide flexible collection dates, summer storage, and full furniture protection.",
    harborne: " Our commitment to visual excellence and careful handling means your period furnishings, paintings, and glassware are transported safely, giving you complete confidence during your Harborne relocation. We provide bespoke white-glove packing, wardrobe boxes, and floor runners as standard.",
    moseley: " We take special pride in protecting period woodwork, delicate decorations, and personal keepsakes, ensuring your Moseley home move is completed with dignity, precision, and complete peace of mind. Our DBS-checked staff treat your historic property with the care and attention it deserves.",
    northfield: " Whether you are moving across town or relocating across the UK, our dependable removals crew provides transparent prices, punctual timings, and complete insurance cover for every Northfield move. We supply tail-lift Luton vans, protective quilted blankets, and full furniture dismantling services.",
    shirley: " From luxury apartments to detached family residences, our removals crew provides a seamless, polite, and fully insured moving service that takes the strain off moving day throughout Shirley. We provide clear, itemised quotations and ensure every room is set up exactly to your liking.",
    redditch: " Our modern Luton vans and trained movers ensure that all furniture and personal belongings are protected from collection to delivery, providing a reliable removals service across Redditch and north Worcestershire. We supply wardrobe boxes, furniture covers, and secure containerised storage facilities. Whether you are moving locally near Arrow Valley or across the Midlands, our team delivers complete peace of mind.",
    bromsgrove: " We provide tailored removals packages for homes of all sizes in Bromsgrove, offering full packing, secure containerised storage, and experienced porters who treat your property with genuine care. We use floor runners to keep your hallways pristine and protect all delicate items.",
    tamworth: " Our team delivers friendly, punctual, and hardworking removals support, ensuring that heavy appliances, furniture, and boxed items are transported safely to your new Tamworth home. We offer fixed pricing with zero hidden surcharges and full Goods in Transit insurance cover. Our porters handle dismantling and rebuilding of beds and tables with complete professional expertise.",
    lichfield: " With specialized equipment for upright pianos, fine antiques, and high-value furnishings, our experienced porters ensure your move in the historic city of Lichfield is conducted with complete distinction. We navigate narrow historic lanes with ease and protect all period features throughout.",
    cannock: " From small apartment transfers to complete family house moves near the Chase, our DBS-checked team provides a reliable, courteous, and fully insured service throughout Cannock. We take care of heavy lifting, furniture assembly, and packing so you can relax on moving day. Every relocation is backed by our full goods in transit protection.",
    nuneaton: " Our transparent pricing, modern fleet, and experienced removal porters ensure that your house or flat move in Nuneaton is completed safely, on budget, and with zero unnecessary stress. We supply double-walled boxes, wardrobe cartons, and quilted covers for complete peace of mind. We work seven days a week to accommodate your completion schedule.",
    bedworth: " We supply all necessary packing materials, protective blankets, and experienced moving assistance to ensure that your home transition in Bedworth is smooth, swift, and completely hassle-free. Our friendly team handles heavy appliances and delicate items with equal professionalism. You receive a guaranteed fixed price with no hidden fees.",
    "leamington-spa": " From Regency townhouses to modern university accommodation, our professional team provides the care, floor protection, and expertise needed for a stress-free move across Royal Leamington Spa. We handle grand stairwells, historic plasterwork, and heavy furniture with supreme skill, wrapping all delicate items in quilted blankets."
  };

  const extra = additions[town.slug] || " Our experienced removals team provides prompt, polite, and fully insured moving support, ensuring that all furniture, fragile possessions, and household items are transported securely to your new address.";
  return `${town.intro} ${extra}`;
}

// Write all town JSON files
for (const town of towns) {
  const finalIntro = expandIntro(town);
  const data = {
    town: town.town,
    slug: town.slug,
    county: town.county,
    metaTitle: `${town.town} Removals & Storage | Jimmys Removals`,
    metaDescription: `Professional, insured house removals, man and van, and packing in ${town.town}. Clean Air Zone compliant vans, DBS-checked movers, and transparent pricing.`,
    intro: finalIntro,
    localKnowledge: town.localKnowledge,
    postcodes: town.postcodes,
    nearbyAreas: town.nearbyAreas,
    travelInfo: town.travelInfo,
    cleanAirZone: {
      enabled: town.cazEnabled,
      note: town.cazNote
    },
    servicesOffered: [
      "House Removals",
      "Flat Removals",
      "Man and Van",
      "Packing Services",
      "Office Removals",
      "Storage Solutions",
      "Furniture Dismantling"
    ],
    localFaqs: town.faqs.map((f) => ({
      question: f.question,
      answer: f.answer,
      display: true
    })),
    lat: town.lat,
    lng: town.lng,
    tier: town.tier,
    heroImage: `/images/locations/${town.slug}.webp`
  };

  const filePath = path.join(locationsDir, `${town.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

console.log(`Successfully generated and expanded ${towns.length} location profiles.`);
