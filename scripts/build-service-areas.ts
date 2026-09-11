import fs from 'node:fs';
import path from 'node:path';

const serviceAreasDir = path.resolve(process.cwd(), 'src/content/service-areas');
if (!fs.existsSync(serviceAreasDir)) {
  fs.mkdirSync(serviceAreasDir, { recursive: true });
}

interface ServiceAreaEntry {
  service: string;
  location: string;
  uniqueIntro: string;
  localAngle: string;
  faqs: Array<{ question: string; answer: string; display: boolean }>;
  caseStudy?: {
    title: string;
    scenario: string;
    outcome: string;
  };
}

const entries: ServiceAreaEntry[] = [
  // 1. house-removals in birmingham
  {
    service: "house-removals",
    location: "birmingham",
    uniqueIntro: "Looking for dedicated house removals in Birmingham? Jimmys Removals provides comprehensive domestic moving solutions across the Birmingham metropolitan area. Operating a 100% Clean Air Zone compliant fleet, our DBS-checked removal teams move everything from historic Victorian properties in Edgbaston, Harborne, and Moseley to new developments in Digbeth and Perry Barr with complete peace of mind.",
    localAngle: "Moves within Birmingham frequently encounter the Clean Air Zone boundary along the A4540 Middleway. With our Euro 6 fleet, you never incur unexpected £8 daily van charges. We also liaise with local building concierges across city-centre apartment complexes to reserve loading bays and lift slots.",
    faqs: [
      {
        question: "Do you charge extra for Birmingham Clean Air Zone entry on house moves?",
        answer: "No. Our entire vehicle fleet meets Euro 6 low-emission regulations, meaning zero CAZ fees for our clients inside the A4540 Middleway.",
        display: true
      },
      {
        question: "How do you manage parking for house moves in Birmingham terraced roads?",
        answer: "We advise on temporary parking dispensations through Birmingham City Council and position our 3.5-tonne Luton vans early in the morning to prevent road obstruction.",
        display: true
      },
      {
        question: "Can you provide packing boxes across Birmingham?",
        answer: "Yes, we deliver robust double-walled boxes, bubble wrap, tape, and wardrobe cartons across all Birmingham postcodes prior to moving day.",
        display: true
      },
      {
        question: "What insurance is included with a Birmingham house removal?",
        answer: "Every domestic move includes up to £50,000 Goods in Transit cover and £2,000,000 Public Liability insurance as standard.",
        display: true
      }
    ],
    caseStudy: {
      title: "4-Bedroom Victorian Terrace Relocation in Harborne",
      scenario: "Moving a family from a narrow-access Victorian property on Vivian Road to a contemporary detached home in Edgbaston, requiring furniture dismantling and parking management.",
      outcome: "Completed on schedule with full mattress protection, floor runners, and zero damage to original period cornicing."
    }
  },
  // 2. house-removals in wolverhampton
  {
    service: "house-removals",
    location: "wolverhampton",
    uniqueIntro: "Moving house in Wolverhampton? Jimmys Removals delivers dependable, fully insured house removals across all WV postcode districts. From prestigious detached properties in Tettenhall and Wightwick to family residences in Penn, Wednesfield, and Bushbury, our friendly crew makes your move seamless and stress-free.",
    localAngle: "Navigating the Wolverhampton inner ring road and main radials like the A449 Penn Road requires route familiarity to avoid peak school and commuter congestion. We coordinate arrival times carefully to ensure loading and unloading proceed without delays.",
    faqs: [
      {
        question: "Do you cover all Wolverhampton neighbourhoods for house moves?",
        answer: "Yes, we service Tettenhall, Penn, Bushbury, Wednesfield, Compton, and all surrounding areas.",
        display: true
      },
      {
        question: "Can you dismantle large wardrobes during a Wolverhampton house move?",
        answer: "Yes, our porters carry full toolkits to disassemble and reconstruct flat-pack and custom wardrobes.",
        display: true
      },
      {
        question: "How much notice do I need for a house move in Wolverhampton?",
        answer: "We recommend 1 to 2 weeks notice once exchange of contracts has occurred, although short-notice bookings can often be accommodated.",
        display: true
      },
      {
        question: "Are your Wolverhampton removal staff DBS-checked?",
        answer: "Yes, every member of our removals crew is thoroughly DBS-checked and professionally trained.",
        display: true
      }
    ]
  },
  // 3. house-removals in coventry
  {
    service: "house-removals",
    location: "coventry",
    uniqueIntro: "For smooth, stress-free house removals across Coventry, trust Jimmys Removals. Whether relocating between 1930s semi-detached homes in Cheylesmore and Styvechale or moving into modern family estates in Bannerbrook and Walsgrave, our dedicated teams take care of all packing, loading, and transit with utmost care.",
    localAngle: "Coventry's iconic ring road (A4053) requires defensive, expert driving when operating loaded 3.5-tonne Luton vans. Our drivers know every entry and exit slip road to avoid unnecessary loop delays.",
    faqs: [
      {
        question: "Do you offer full packing services for Coventry house removals?",
        answer: "Yes, we offer full-house or fragile-only packing, providing all boxes, paper, and bubble wrap.",
        display: true
      },
      {
        question: "Are your removal vans exempt from Coventry clean air charges?",
        answer: "Yes, Coventry does not levy clean air charges on private removals vans.",
        display: true
      },
      {
        question: "Can you move upright pianos in Coventry?",
        answer: "Yes, our specialist moves team uses piano shoes, heavy transit covers, and tail lifts for upright pianos.",
        display: true
      },
      {
        question: "Do you cover long-distance moves from Coventry to London?",
        answer: "Yes, we provide direct point-to-point UK relocations with dedicated vehicles.",
        display: true
      }
    ]
  },
  // 4. house-removals in solihull
  {
    service: "house-removals",
    location: "solihull",
    uniqueIntro: "Jimmys Removals provides premium, white-glove house removals across the Borough of Solihull. From expansive executive homes in Knowle, Dorridge, and Alderbrook to elegant apartments in Touchwood and Olton, our courteous team treats your furniture and personal treasures with meticulous attention to detail.",
    localAngle: "Solihull moves often feature substantial square footage, manicured gravel drives, and luxury hardwood or marble floors. We use rubber-wheeled moving dollies and heavy-duty walkway runners to protect every surface.",
    faqs: [
      {
        question: "How do you protect gravel driveways in Solihull?",
        answer: "We use pneumatic rubber-wheeled moving equipment to ensure gravel driveways remain undisturbed during loading.",
        display: true
      },
      {
        question: "Do you supply wardrobe boxes for luxury clothing?",
        answer: "Yes, we supply upright wardrobe cartons with hanging rails to keep designer garments pristine.",
        display: true
      },
      {
        question: "Can you move high-value antiques in Solihull?",
        answer: "Yes, our £50,000 Goods in Transit insurance and bespoke packing protect fragile antiques and art.",
        display: true
      },
      {
        question: "Are weekend removals available in Solihull?",
        answer: "Yes, we operate 7 days a week, including Saturdays and Sundays, with zero hidden weekend surcharges.",
        display: true
      }
    ]
  },
  // 5. house-removals in dudley
  {
    service: "house-removals",
    location: "dudley",
    uniqueIntro: "Jimmys Removals delivers dependable house removals across Dudley and the wider Black Country. We understand the physical demands of Dudley's steep roads and hilltop homes around Sedgley, Gornal, and Kate's Hill, deploying agile Luton vans equipped with tail lifts, ramps, and heavy-duty straps.",
    localAngle: "Steep gradients in Dudley require careful van positioning and load balancing. Our porters anchor heavy appliances securely against the vehicle bulkhead and use wheel chocks on hillside driveways.",
    faqs: [
      {
        question: "How do you handle moves on steep slopes in Dudley?",
        answer: "Our vehicles carry heavy wheel chocks and tail lifts, and our crew balances weight carefully for hill stability.",
        display: true
      },
      {
        question: "Can you assist with dismantling flat-pack beds in Dudley?",
        answer: "Yes, our team carries full toolkits to disassemble and rebuild bedroom and living room furniture.",
        display: true
      },
      {
        question: "What size vans do you use in Dudley?",
        answer: "We use 3.5-tonne Luton low-loaders with tail lifts that navigate narrow Black Country streets with ease.",
        display: true
      },
      {
        question: "Do you offer house clearance in Dudley?",
        answer: "Yes, we provide licensed, eco-friendly house clearance and donation services throughout Dudley.",
        display: true
      }
    ]
  },
  // 6. house-removals in walsall
  {
    service: "house-removals",
    location: "walsall",
    uniqueIntro: "Moving house in Walsall? Jimmys Removals provides experienced, insured domestic removals throughout the borough. From period terraces in Caldmore and Palfrey to generous semi-detached family homes along the Broadway and Park Hall, our friendly, hardworking porters handle your furniture with care.",
    localAngle: "With close proximity to the M6 corridor (Junctions 7, 9, and 10), we coordinate arrival and departure timings to circumvent commuter queues along the A454 and Pleck Road, keeping your Walsall move on schedule.",
    faqs: [
      {
        question: "How do you manage tight streets in Caldmore and Palfrey?",
        answer: "Our compact Luton vans navigate narrow terraced roads without blocking traffic, allowing efficient curbside loading.",
        display: true
      },
      {
        question: "Do you offer packing services in Walsall?",
        answer: "Yes, we provide full packing and fragile-only packing using heavy-duty double-walled boxes.",
        display: true
      },
      {
        question: "Are your Walsall removal quotes fixed?",
        answer: "Yes, all our written quotations provide a guaranteed fixed price with zero unexpected charges.",
        display: true
      },
      {
        question: "Can you supply moving materials before moving day?",
        answer: "Yes, we deliver boxes, bubble wrap, tape, and paper directly to your home in Walsall.",
        display: true
      }
    ]
  },
  // 7. man-and-van in birmingham
  {
    service: "man-and-van",
    location: "birmingham",
    uniqueIntro: "Need an affordable, agile man and van service in Birmingham? Jimmys Removals provides flexible hourly or fixed-rate man and van bookings across the city. Whether you are moving a studio flat in Digbeth, buying furniture on Facebook Marketplace, or relocating a student room in Selly Oak, we provide the muscle and modern transport.",
    localAngle: "Our man and van fleet is 100% Clean Air Zone compliant, allowing free transit across the A4540 Middleway without daily emissions penalties. We offer 1, 2, or 3 working movers depending on your requirements.",
    faqs: [
      {
        question: "Is your Birmingham man and van service compliant with the Clean Air Zone?",
        answer: "Yes, all our vans meet Euro 6 standards, so you will never pay CAZ surcharges in central Birmingham.",
        display: true
      },
      {
        question: "What is the minimum booking period for man and van in Birmingham?",
        answer: "Our minimum booking period is 2 hours, billed in clear 30-minute increments thereafter.",
        display: true
      },
      {
        question: "Can I travel in the van cab with the driver?",
        answer: "Subject to advance notice and seatbelt availability, one passenger may accompany the driver.",
        display: true
      },
      {
        question: "Do you help with lifting heavy items like sofas and appliances?",
        answer: "Yes, our drivers and porters actively load, carry, secure, and unload all agreed items.",
        display: true
      }
    ]
  },
  // 8. man-and-van in wolverhampton
  {
    service: "man-and-van",
    location: "wolverhampton",
    uniqueIntro: "Jimmys Removals provides reliable man and van hire across Wolverhampton and the surrounding Black Country. Perfect for small flat moves, student transfers, single bulky items, and local store collections, our service pairs modern Luton vans with experienced moving staff at competitive hourly rates.",
    localAngle: "From Whitmore Reans to Penn and Wednesfield, our drivers navigate local roads swiftly. We arrive equipped with transit blankets, heavy-duty webbing straps, and sack barrows to protect your items during transit.",
    faqs: [
      {
        question: "What are your man and van rates in Wolverhampton?",
        answer: "Rates start from £65/hour for 1 man and a 3.5-tonne Luton van with a 2-hour minimum booking.",
        display: true
      },
      {
        question: "Can you help move student rooms in Wolverhampton?",
        answer: "Yes, we regularly support University of Wolverhampton students moving to halls or private shared houses.",
        display: true
      },
      {
        question: "Are items insured during man and van moves?",
        answer: "Yes, all items are protected under our £50,000 Goods in Transit insurance policy.",
        display: true
      },
      {
        question: "Do you operate man and van on weekends?",
        answer: "Yes, we operate 7 days a week, offering Saturday and Sunday moving slots at transparent rates.",
        display: true
      }
    ]
  },
  // 9. man-and-van in coventry
  {
    service: "man-and-van",
    location: "coventry",
    uniqueIntro: "Looking for a punctual, dependable man and van in Coventry? Jimmys Removals offers flexible hourly moving solutions for students, small flat moves, office deliveries, and single bulky items. We provide modern Luton vans and strong, courteous movers who take the hassle out of your local move.",
    localAngle: "With huge student populations at Coventry University and the University of Warwick in Canley and Earlsdon, our man and van service offers the ideal balance of affordability and professional care for term-time moves.",
    faqs: [
      {
        question: "Do you offer student discounts for man and van in Coventry?",
        answer: "Yes, we offer student-friendly rates and van-sharing options for campus relocations.",
        display: true
      },
      {
        question: "Can you collect items from IKEA or retail parks in Coventry?",
        answer: "Yes, we offer store collection and home delivery with furniture assembly assistance if requested.",
        display: true
      },
      {
        question: "What vehicle is supplied with the man and van service?",
        answer: "We supply a 3.5-tonne Luton low-loader box van equipped with a tail lift and protective blankets.",
        display: true
      },
      {
        question: "How do I book man and van in Coventry?",
        answer: "You can book instantly online or call our operations desk on 0121 285 4122.",
        display: true
      }
    ]
  },
  // 10. office-removals in birmingham
  {
    service: "office-removals",
    location: "birmingham",
    uniqueIntro: "Minimise business downtime with professional office removals in Birmingham by Jimmys Removals. We specialise in out-of-hours, evening, and weekend business relocations across the Colmore Business District, Brindleyplace, Jewellery Quarter, and surrounding commercial centres.",
    localAngle: "Birmingham commercial relocations require coordination with building facility managers, loading bay access, and service lift slots. We supply sealable commercial plastic crates, anti-static IT computer bags, and workstation labels to ensure staff walk into a fully operational office on Monday morning.",
    faqs: [
      {
        question: "Can you complete our Birmingham office move over the weekend?",
        answer: "Yes, the majority of our commercial clients schedule moves starting Friday evening to guarantee zero trading downtime.",
        display: true
      },
      {
        question: "Do you supply plastic crates for IT and desk contents?",
        answer: "Yes, we deliver heavy-duty lidded plastic crates and numbered security seals ahead of moving day.",
        display: true
      },
      {
        question: "Are your vans compliant with the Birmingham Clean Air Zone?",
        answer: "Yes, our fleet is Euro 6 compliant with zero CAZ charges when operating in central business zones.",
        display: true
      },
      {
        question: "What liability insurance do you carry for commercial moves?",
        answer: "We carry £2,000,000 Public Liability insurance and comprehensive commercial transit cover.",
        display: true
      }
    ],
    caseStudy: {
      title: "35-Desk Law Firm Relocation on Colmore Row",
      scenario: "Relocating a legal practice with confidential document archives and multi-screen IT setups over a single weekend with strict landlord protection rules.",
      outcome: "All workstations, file cabinets, and IT servers relocated and set up with zero business disruption."
    }
  },
  // 11. office-removals in coventry
  {
    service: "office-removals",
    location: "coventry",
    uniqueIntro: "Jimmys Removals provides seamless office and commercial relocations across Coventry. Whether moving premises within Friargate business district, Coventry University Technology Park, or industrial centres along the A45/A46 corridor, our project managers ensure your office move is delivered on time and within budget.",
    localAngle: "Commercial moves in Coventry benefit from direct access to arterial routes. We coordinate phased moves, desk dismantling, and secure confidential file transport to maintain complete operational efficiency.",
    faqs: [
      {
        question: "Can you dismantle and reassemble modular office desks in Coventry?",
        answer: "Yes, our commercial technicians dismantle modular bench desks, partition screens, and boardroom tables.",
        display: true
      },
      {
        question: "Do you handle IT equipment and server rack transport?",
        answer: "Yes, we use anti-static foam wraps, padded computer crates, and tail-lift vans to move IT gear safely.",
        display: true
      },
      {
        question: "Can you dispose of old, unwanted office furniture?",
        answer: "Yes, we offer licensed clearance, ethical recycling, and charity donation for surplus commercial furniture.",
        display: true
      },
      {
        question: "Are your commercial staff DBS-checked?",
        answer: "Yes, all our movers are DBS-vetted and carry official company identification.",
        display: true
      }
    ]
  },
  // 12. office-removals in solihull
  {
    service: "office-removals",
    location: "solihull",
    uniqueIntro: "Relocating your business in Solihull? Jimmys Removals provides bespoke corporate removals for professional practices, technology firms, and corporate headquarters across Solihull town centre, Blythe Valley Park, and Birmingham Business Park.",
    localAngle: "Blythe Valley and Birmingham Business Park feature modern corporate offices with strict landlord protection guidelines. We install lift wall pads and floor runners, ensuring commercial facilities remain immaculate throughout the relocation.",
    faqs: [
      {
        question: "Do you have experience in business parks like Blythe Valley?",
        answer: "Yes, we regularly service corporate clients in Blythe Valley, Fore Business Park, and Birmingham Business Park.",
        display: true
      },
      {
        question: "Can you provide weekend office moves in Solihull?",
        answer: "Yes, we execute relocations from Friday evening through Sunday night so trading resumes seamlessly Monday.",
        display: true
      },
      {
        question: "Do you provide crate hire in Solihull?",
        answer: "Yes, we supply stackable commercial plastic crates for desk contents and secure document filing.",
        display: true
      },
      {
        question: "Can you move heavy fireproof filing safes in Solihull?",
        answer: "Yes, our specialist team uses heavy-duty dollies and stair-climbers for commercial safes.",
        display: true
      }
    ]
  }
];

// Write all serviceAreas JSON files
for (const entry of entries) {
  const fileName = `${entry.service}-${entry.location}.json`;
  const filePath = path.join(serviceAreasDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(entry, null, 2), 'utf-8');
  console.log(`Generated serviceArea: ${fileName}`);
}

console.log(`Successfully generated ${entries.length} serviceArea profiles.`);
