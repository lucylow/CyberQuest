bg = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/bgG.mp3');
buttonClick = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/Buttonclick.mp3');
featured = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/featured.mp3');
slideSlow = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/slideSlow.mp3');
countStats = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/Countupstats.mp3');
researchClick = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/researchClick.mp3');
researchInactive = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/researchInactive.mp3');
slideFast = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/slideFast.mp3');

featuredModal = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/featuredModal.mp3');
researchComplete = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/researchComplete.mp3');
const penProgressEl = $('.pen');


const statAddSounds = []

for(i = 0; i < 10; i++) {
    let a  = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/statAdd.mp3');
    statAddSounds.push(a)
}


function twShare(url, title, winWidth, winHeight) {
    const winTop = 100;
    const winLeft = 100;
    window.open(`https://twitter.com/intent/tweet?text=${title}`, 'sharer', `top=${winTop},left=${winLeft},toolbar=0,status=0,width=${winWidth},height=${winHeight}`);
}

pen_id = $('._pen_id').text();

$('body').on('click', '.share', () => {
    twShare(`https://codepen.io/jcoulterdesign/full/a1b3ea524ead4700015153bb95b881c3`, `I managed to get ${developer.followers.toLocaleString()} followers on the Codepen Simulator Game by @jamiecoulter89. https://bit.ly/2LyxS71 %23codepenSimGame`, 520, 350);
    return false;
});


console.log(statAddSounds)

function updateMyStatsUi() {
    $('.mystats_css span.val').html(developer.css.toLocaleString());
    $('.mystats_html span.val').html(developer.html.toLocaleString());
    $('.mystats_js span.val').html(developer.js.toLocaleString());
    $('.mystats_design span.val').html(developer.design.toLocaleString());
}

const globals = {
    'timerTick' : 40,
    'keyTick' : 30,
    'penStatAddChance' : 4,
    'typeIncrement' : .5,
    'makingPen' : true,
    'penInProgress' : false,
    'viewDecay' : 1.1,
    'maxBars' : 30,
    'followerFriction' : 50,
    'viewMultiplier' : 1.2,
    'researchTime' : 4000,
    'researching' : false,
    'featuredMinStats' : 500,
    'featuredBoost' : 3.3,
    'featureChance' : 15,
    'paused' : true,
    'gameLength' : 365,
    'audio' : true,
    'auto' : false
}




// Random pen names

$('.restart').click(function(){

})

const penNames = [
    'Familiarity with Vendor Risk Assessment Frameworks/Tools (e.g. SIG/SIG Lite, CAIQ, CIS20, VSAQ, and NIST 800-171) Exposure to privacy and Information Risk Frameworks (NIST 800-53, SOC2, ISO/IEC 27001/2, GDPR)',
    'Study for Certified Information Security Manager (CISM) course to report on Compliance (ROC) with external QSA assessors',
    ' Federal Programs Government regulations and standards FedRAMP',
    'Meet with the Counter-Threat Unit Team to discuss common frameworks used for threat intelligence (e.g. Kill Chain, Diamond Model, MITRE ATT&CK).',
    'Utilize Defensive Cyber Operations (DCO) and SIEM Tools to analyze and correlate event logs from network security devices and mission critical infrastructure',
    'Provide annual report to executive leadership on risk posture and monitor the annual PCI Report on Compliance (ROC) with external QSA assessors and various business units while keeping pace with changes in technology and security threats.',
    'Meeting with New SecureWorks Counter-Threat Unit Team on Fair Information Practice Principles (FIPPs), HIPPA/HITRUST, PCI, FCRA/GLBA, FACTA, ISO, SOCII, FERPA, COPPA and other relevant privacy frameworks',
    'CISSP certification from the cybersecurity professional organization',
    'Meet with Fortune 500 corporation customers clarity on feasibility, time, cost, and impact with strong knowledge of technology development life cycle methodologies, change management, and project management.',
    'Learn the Federal Programs Government regulations and standards FedRAMP(NIST 800-53), DISA SRG and STIGs NISPOM, JSIG, CNSSI, DoDI 8510.01 RMF and/or other governing documentation',
    'UL-2050 Compliant Intrusion Detection Systems',
    'Review and verify personnel security clearances and SAP/SCI accesses through queries to Government, IT, INFOSEC, for classified networks security databases and systems.',
    'Develop, coordinate, and submit for approval physical security documentation including Fixed Facility Checklists (FFC) and TEMPEST Addendums',
    'Change Operating Systems from Windows to Linux) and Network and host-based security systems settings',
    'Fixed Facility Checklists (FFC) and TEMPEST Addendums',
    'Manage and maintain UL-2050 Compliant Intrusion Detection Systems (IDS) and automated Access Control Systems (ACS)',
    'Assist with host-based security across mission systems utilizing DoD Host-based Security System (HBSS)\Enterprise Security Solutions (ESS), to include: antimalware, host-based intrusion protection system, data loss prevention, and rogue system detection',
    'Have experience with other Security Operations Centers (SOC)/DCO tools/applications, such as Firewalls, Intrusion Detection Systems / Intrusion Prevention Systems, Network Security Manager, Bluecoat, Barracuda, etc.',
    'Hire, develop, lead, motivate, performance manage and coach a cross-section of security and technology professionals and managers. Train co-workers on Compliance Certification (Prior 3PAO, ISO 27001 Lead Auditor/Implementer, QSA',
    'Learn emerging tech (federation, network, cryptography, firewalls, or intrusion detection',
    'Prior 3PAO, ISO 27001 Lead Auditor/Implementer, QSA',
    'Conduct third-party security risk assessments of new and existing third parties (vendors/partners) Operate as the Third-party Security Risk management subject matter expert supporting cross-functional teams looking to onboard third parties in processes that interact with data.',
    'Advising on legal and regulatory developments impacting data privacy and data security, including identifying trends and potential impacts on the business risk management activities.',
    'Learn Scripting (e.g., PERL, Python, shell scripting) Linux/Unix OS and Windows administration knowledge. security analysis and solutions in a WAN/LAN environment to include Routers, Switches, Network Devices, and Operating Systems (e.g., Windows, and Linux)',
    'Automated Access Control Systems (ACS)',
    'New Firewalls, Intrusion Detection System',
    'Study for the GIAC Security Essentials Certification (GSEC) like Evidence Collection automation for audit requests',
    'Review data originating from or reflecting status of ongoing intrusions or cyber security incidents and report and document/report the findings in accordance with CJCSM 6510.01B guidelines.',
    'DoD Host-based Security System',
    'Apply for Principal Software Developer job',
    'Work across organizational boundaries to drive implementation of compliance requirements and security controls',
    'GIAC Certified Incident Handler (GCIH)',
    'Third-party security risk assessments translating business needs into achievable, sustainable and innovative technical solutions and capability roadmaps.',
    'Property & Casualty Insurance Industry Meeting',
    'Support cross-functional security and compliance initiatives, including providing subject matter expertise over security processes for new and ongoing customer and regulatory requirements',
    'Memorize CJCSM 6510.01B guidelines',
    'Leverage automated evidence collection where applicable, Evidence Collection automation for automatable controls and audit requests'  
]

const research = [
    {
        'index' : 1,
        'name' : 'Avoid Computer Misuse: Dont view or download pornography Dont gamble on the Internet, Dont conduct private business/money-making ventures Dont load or use personal/unauthorized software or services, such as DropBox Dont make unauthorized configuration changes Only check personal e-mail if your organization allows it Dont play games unless allowed by your organization to do so on persFonal time Dont charge personal mobile devices or connect any other USB devices (like a coffee warmer)',
        'cost' : 10,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 10,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 2,
        'name' : 'CAC/ PlV/Securlty Token TlpS Common Access Card Personal ldentity_Verification [PIV] is a controlled item and implements DoD Public Key Infrastructure [PKI] 1 and contains certificates for: - Encryption - Digital signatures Note: Some systems use different types of smart card security tokens. Be sure to avoid a potential security violation by using the appropriate token for each system. To protect your CAC/PIV: - Use all security tokens appropriately - Remove and take your CAC/PIV whenever you leave your work station 0 Look your computer when leaving or shut it down, depending on your organization’s security policy 0 Do not use your CAC/PIV for badge exchanges since it also serves as an authentication token for computer, system, website, and data access 0 Do not write down or share PIN for your CAC/ F’IV 0 Maintain possession of your CAC/ PIV at all times 0 If lost or misplaced, report it immediately to your security PDC',
        'cost' : 30,
        'increaseCss' : 10,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 3,
        'name' : 'Physical Security Tips Physical security protects the facility and the information systems/infrastructure, both inside and outside the building. To practice good physical security: • know and follow your organizations policy on: o Gaining entry • Securing work area o Responding to emergencies • Use your own security badge/key code. Note that your CAC/PIV is sometimes used as an access badge. • Dont allow others access or to piggyback into secure areas • Challenge people without proper badges Report suspicious activity • Protect access rosters from public view (e.g., do not take them home or post them in public spaces, such as bulletin boards)',
        'cost' : 50,
        'increaseCss' : 0,
        'increaseJs' : 10,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 4,
        'name' : 'TIPS ABOUT PHISHING: A type of Social Engineering To protect against phishing: Do not access sites by selecting links in e-mails or pop-up messages. Type the address or use bookmarks Contact the organization using a telephone number you know to be legitimate if you are suspicious of a link or attachment Delete the e-mail • Report e-mails requesting personal information to your security POC or help desk o If you are a member of the intelligence community, report all phishing attempts to your security POC Look for digital signatures Never give out organizational, personal, or financial information to anyone by e-mail Avoid sites with expired certificates. If officially directed to a site with expired certificates, report it to your security POC or help desk. Spear phishing is a type of phishing attack that targets particular individuals, groups of people, or organizations.',
        'cost' : 100,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 10,
        'researched' : false
    },{
        'index' : 5,
        'name' : 'TIPS ABOUT INTERNET HOAXES Internet hoaxes: @ Clog networks by slowing  down internet and email services @ Can be a part of a distributed denial of service (DDoS) attack To protect against Internet hoaxes: Use online sites to confirm or expose potential hoaxes and dont follow email hoaxes Follow your organization’s policies on loading files onto workstations and laptops; select the resources button to access a web page where you may find resources specific to your agency.',
        'cost' : 150,
        'increaseCss' : 10,
        'increaseJs' : 10,
        'increaseHtml' :10,
        'increaseDesign' : 15,
        'researched' : false
    },{
        'index' : 6,
        'name' : 'Here are some additional tips that can help prevent the downloading of viruses and other malicious code when checking your email Scan all attachments • Delete e-mail from senders you do not know Dont e-mail infected files to anyone Dont access websites in e-mail/popups TIPS ABOUT COMPRESSED URLS Exercise caution with compressed URLs links, such as Tiny URL (e.g.,http://tinyurl.com/126450tr) Compressed URLs convert a long URL into a short URL for convenience but may be used to mask malicious intent Investigate the destination by using the preview feature to see where the link actually leads: o Type the compressed URL into your web browsers address bar o Type the word "preview" followed by a period after the http:// (e.g., http://preview.tinyurl.com/126450tr) o Press Enter on your keyboard; the compressed URL website will show the full address of the link without going to the destination site',
        'cost' : 200,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 15,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 7,
        'name' : 'Removable Media and Mobile Computing/PEDS Removable media include flash media, such as thumb drives, memory sticks, and flash drives; CDs and DVDs; external hard drives, and music players (such as iPods). • Use only removable media approved by your organization • Only use flash media when operationally necessary, owned by your organization, and approved by the appropriate authority in accordance with policy Do not use any personally owned/non-organizational removable flash media on your organizations systems • Do not use your organizations removable flash media on non-organizational/personal systems Mobile devices include laptops, fitness bands, tablets, smartphones, electronic readers, and Bluetooth devices. • Never plug unauthorized devices into a government system • Be aware that wireless connections to these devices bring increased threats and vulnerabilities • Abide by the signed End User License Agreement for mobile devices • Understand and follow your organizations Bring Your Own Device (BYOD) policy NOTE: Removable media and mobile computing devices have many common features, and the same rules and protections apply to both.',
        'cost' : 250,
        'increaseCss' : 15,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 8,
        'name' : 'Familiarity with Vendor Risk Assessment Frameworks/Tools (e.g. SIG/SIG Lite, CAIQ, CIS20, VSAQ, and NIST 800-171) Exposure to privacy and Information Risk Frameworks (NIST 800-53, SOC2, ISO/IEC 27001/2, GDPR)',
        'cost' : 450,
        'increaseCss' : 0,
        'increaseJs' : 15,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 9,
        'name' : 'Social Networking - Guarding Your Online Privacy Follow these information security best practices at home and on social networking sites. Be aware of the information you post online about yourself and your family. Sites own any content you post. Once you post content, it can’t be taken back. @ Create strong passwords @ Dont give away your position through GPS or location links or updates about places where you are or Pte Bele Bel) @ If possible, validate all friend requests through another source, such as phone or e-mail, before eee R cul) @ Beware of links to games, quizzes, and other applications available through social networking services ®@ Avoid posting personally identifiable information (Pll) like Social Security Numbers',
        'cost' : 550,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 15,
        'researched' : false
    },{
        'index' : 10,
        'name' : 'Meet with the Counter-Threat Unit Team to discuss common frameworks used for threat intelligence (e.g. Kill Chain, Diamond Model, MITRE ATT&CK).',
        'cost' : 700,
        'increaseCss' : 15,
        'increaseJs' : 20,
        'increaseHtml' : 10,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 11,
        'name' : 'Travel Tips Exercise caution when using Near Field Communication (NFC) ® NFC is wireless technology that enables your electronic devices to establish communications and exchange information when placed next to each other. Smartphones can be enabled to: © Read electronic tag information, such as proximity cards or other objects with embedded NFC tags © Transmit information electronically, such as when making credit card payments with information held on the smartphone © Eavesdropping: an adversary intercepts the signal © Data manipulation or corruption: an adversary intercepts the signal and alters it © Viruses: stored financial or mission information increases',
        'cost' : 1000,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 20,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 12,
        'name' : 'Tips for Identifying PII and PHI Personally Identifiable Information (PII): ¢ Social Security Numbers * Dates and places of birth * Mothers’ maiden names * Biometric records Protected Health Information (PHI): « Is health information that identifies the individual « Is a subset of health information, including demographic information Is created or received by a healthcare provider, health plan, or employer Relates to: © Physical or mental health of an individual © Provision of healthcare to an individual © Payment for the provision of healthcare to an individual. ¢ Avoid sharing sensitive information using shared folders or shared applications (e.g., SharePoint, Google Docs) unless access controls are established that allow only those personnel with an official need-to-know to access the information. ¢ Follow your organization’s policies on the use of mobile computing devices and encryption e Use only mobile devices approved by your organization ¢ Encrypt all sensitive data, including PII and PHI, on mobile devices and when e-mailed. The DoD requires two-factor authentication for access. ¢ Never allow sensitive data on non-Government-issued mobile devices. ¢ Never use personal e-mail accounts for transmitting PII and PHI. PII and PHI may only be e- mailed between Government e-mail accounts and must be encrypted and digitally signed when possible.',
        'cost' : 1150,
        'increaseCss' : 20,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 13,
        'name' : 'Social engineers use telephone surveys, e—mail messages, websites, text messages, automated phone calls, and in-person interviews. To protect against social engineering: 0 Do not: participate in telephone surveys - Do not give out personal information - Do not give out computer or network information 0 Do not follow instructions from unverified personnel - Documentinteraction: 0 Verify the identity of all individuals 0 Write down phone number 0 Take detailed notes - Contact your security POC or help desk 0 Report cultivation contacts by foreign nationals.',
        'cost' : 1400, 
        'increaseCss' : 0,
        'increaseJs' : 20,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 14,
        'name' : 'Tips for Security of Mobile Computing & PEDs To protect data on your mobile computing and portable electronic devices (PEDs): « Lock your laptop/device screen when not in use ¢ Encrypt all sensitive data on laptops and on other mobile computing devices when possible * Password protect Government-issued mobile computing devices * Secure your personal mobile devices to the same level as Government-issued systems « Understand your organization’s policy for using commercial cloud applications (e.g., Dropbox, Drive, etc.) ¢ Maintain visual or physical control of your laptops and mobile devices at all times and especially when going through airport security checkpoints « Have a strategy for addressing potential “authority situations” (e.g., police who want to inspect devices coincident with a traffic stop or an airport TSA agent check) ¢ If lost or stolen, immediately report the loss to your security POC',
        'cost' : 1800,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 20,
        'researched' : false
    },
    {
        'index' : 15,
        'name' : 'Sensitive information includes For Official Use Only (FOUO), Controlled Unclassified Information (CUI), Controlled Technical Information (CTI), PII, financial information, personal or payroll information, Protected Health Information (PHI), proprietary data, and operational information. Sensitive information may contain: • An individuals PII, such as medical (PHI) or financial records • Information provided by a confidential source (person, commercial business, or foreign government) on condition it would not be released • Information that could compromise Government missions or interests.Follow your organizations policy for retention or disposal; select the resources button toaccess a web page where you may find resources specific to your agency • Comply with the DoD Cyber Regulations outlined in the Defense Acquisition Regulation Supplement (DFARS) for CUI and CTI Ensure all receivers have required clearance and/or official need-to-know before transmitting sensitive information or using/replying to e-mail distribution lists If faxing information:   Ensure recipient is at the receiving end o Use correct cover sheet o Contact the recipient to confirm receipt.',
        'cost' : 2200,
        'increaseCss' : 10,
        'increaseJs' : 10,
        'increaseHtml' : 10,
        'increaseDesign' : 10,
        'researched' : false
    },{
        'index' : 16,
        'name' : 'To protect classified data: * Only use data in areas with security appropriate to classification level + Store classified data appropriately in GSA-approved vault/container when not in use Don’t assume open storage in a secure facility * Balance need to share with need to know + Ensure proper labeling: Appropriately mark all classified material and, when required, sensitive material and  Report inappropriately marked material + Never transmit classified information via an unsecure fax machine',
        'cost' : 2700,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 25,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 17,
        'name' : 'Spillage Tips Never use or modify government equipment for an unauthorized purpose: « Such use or modification could be illegal * Misuse of equipment could have a significant mission impact * Unauthorized connection to the Internet or other network could introduce malware or facilitate hacking of sensitive or even classified information e Any unauthorized connection creates a high potential for spillage Spillage Tips If spillage occurs: ¢ Immediately notify your security POC ¢ Do not delete the suspected files ¢ Do not forward, read further, or manipulate the file ¢ Secure the area',
        'cost' : 3200,
        'increaseCss' : 25,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 18,
        'name' : 'Classified vs. Unclassified Network Use Always check to make sure you are using the correct network for the level of data Do NOT use a classified network for unclassified work. Processing unclassified information on a classified network: • Can unnecessarily consume mission-essential bandwidth o May illegally shield information from disclosure under the Freedom of Information Act (FOIA) o Creates a danger of spillage when attempting to remove the information to an unclassified media or hard copy',
        'cost' : 3800,
        'increaseCss' : 0,
        'increaseJs' : 25,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 19,
        'name' : '> Potential Insider Threat Indicators How do we defend against these individuals? By using our powers of observation to recognize potential insider threat indicators, such as: ¢ Difficult life circumstances © Divorce or death of spouse © Alcohol or other substance abuse or dependence © Untreated mental health issues © Financial difficulties * Extreme, persistent interpersonal difficulties * Hostile or vindictive behavior * Criminal behavior e Unexplained or sudden affluence * Unreported foreign contact and travel + Inappropriate, unusual, or excessive interest in sensitive or classified information * Mishandling of classified information * Divided loyalty or allegiance to the U.S. Individuals experiencing stressful situations may be vulnerable to exploitation.',
        'cost' : 4500,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 25,
        'researched' : false
    },{
        'index' : 20,
        'name' : 'Insider Threats Insider Threats are threats from people who have access to the organizations information systems and may cause loss of physical inventory, data, and other security risks. To protect against the insider threat, be alert to and report any suspicious activity or behavior or potential security incident in accordance with your agencys Insider Threat policy: • Attempt to access sensitive information without the need-to-know Unauthorized removal of sensitive information • Unusual request for sensitive information • Bringing an electronic device into prohibited areas • Sudden purchases of high value items/living beyond their means Overseas trips for no apparent reason or of short duration Alcohol or drug problems.',
        'cost' : 5200,
        'increaseCss' : 10,
        'increaseJs' : 10,
        'increaseHtml' : 10,
        'increaseDesign' : 25,
        'researched' : false
    },{
        'index' : 21,
        'name' : 'Classified Data on the Internet Tips If you find classified Government Data/Information Not Cleared for Public Release on the Internet: • Remember that leaked classified or controlled information is still classified/controlled even if it has already been compromised • Do not download it because you are not allowed to have classified information on your computer and downloading it may create a new case of spillage • Note any identifying information and the websites URL Report the situation to your security POC • Never confirm or deny validity of leaked Government information Remember! Any comment by you could be treated as official confirmation by a Government spokesperson.',
        'cost' : 6000,
        'increaseCss' : 15,
        'increaseJs' : 15,
        'increaseHtml' : 15,
        'increaseDesign' : 10,
        'researched' : false
    },{
        'index' : 22,
        'name' : 'Telework Guidelines To telework, you must: • Have permission from your organization Follow your organizations guidance to telework • Employ cybersecurity best practices at all times, including when using a Virtual Private Network (VPN) Perform telework in a dedicated area at home • Use authorized equipment and software and follow your organizations policies with attention to remove classified documents from SecureWorks.',
        'cost' : 6600,
        'increaseCss' : 0,
        'increaseJs' : 25,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 23,
        'name' : 'Malicious Code Tips Malicious code can do damage by corrupting files, erasing your hard drive, and/or allowing hackers access. Malicious code includes viruses, Trojan horses, worms, macros, and scripts and can be spread by e-mail attachments, downloading files, and visiting infected websites To prevent viruses and the download of malicious code: Turn off automatic downloading Scan all external files before uploading to your computer Dont e-mail infected files to anyone Dont access websites in e-mail/popups Research any application and its vulnerabilities before downloading the "app" to your mobile device.',
        'cost' : 7500,
        'increaseCss' : 0,
        'increaseJs' : 30,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 24,
        'name' : 'Learn emerging tech (federation, network, cryptography, firewalls, or intrusion detection',
        'cost' : 9000,
        'increaseCss' : 20,
        'increaseJs' : 20,
        'increaseHtml' : 20,
        'increaseDesign' : 10,
        'researched' : false
    },{
        'index' : 25,
        'name' : 'Home Computer Security (cont.) When working at home on your computer, follow these best security practices, derived from the National Security Agency (NSA) datasheet “Best Practices for Keeping Your Home Network Secure.” Check the SecurewWorks Resources page - some agencies may have discounted/free antivirus software available to their employees © Active DoD military and civilian employees may install antivirus software for home use via the DoD Antivirus Home Use Program; refer to the Resources page to access download instructions Contractors are excluded from using the antivirus software at home or on any system not belonging to SecureWorks',
        'cost' : 12000,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 60,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 26,
        'name' : 'Study for GIAC Certified Incident Handler (GCIH) course',
        'cost' : 14000,
        'increaseCss' : 60,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 27,
        'name' : 'Wireless Technology Tips Wireless technology includes Bluetooth, Infrared, wireless computer peripherals (e.g., wireless keyboard, wireless mouse, etc.), and smart devices (e.g., smart refrigerators, medical pumps, wireless-enabled hearing aids). To protect information systems and data on those systems: * Be cautious when using wireless technology: © Ensure that the wireless security features are properly configured © Turn off/disable wireless capability when connected via LAN cable © Turn off/disable wireless capability when not in use © Avoid using non-Bluetooth paired or unencrypted wireless peripherals (e.g. keyboard, mouse, etc.) Follow your organization’s policies for proper configuration of wireless security features Remember! Wireless technology is inherently not a secure technology.',
        'cost' : 16000,
        'increaseCss' : 0,
        'increaseJs' : 60,
        'increaseHtml' : 0,
        'increaseDesign' : 0,
        'researched' : false
    },{
        'index' : 28,
        'name' : 'Protecting Your Organization To protect your organization: ® Dont speak for your organization or post any embarrassing material @ Consider who you accept as a friend carefully and validate, if possible, before acceptance @ if posting pictures of yourself in uniform or in a work-setting, make sure there are no identifiable Tale',
        'cost' : 18000,
        'increaseCss' : 0,
        'increaseJs' : 0,
        'increaseHtml' : 0,
        'increaseDesign' : 60,
        'researched' : false
    },{
        'index' : 29,
        'name' : 'Protecting Your Organization When establishing personal social networking accounts, use only personal contact information, never your Government contact information Alma a iUinemetc tie Mele iin\ Matinee Bee ele ead civilian employee, military member, or contractor: @ Inform your security POC of all non-professional or non-routine contacts with foreign nationals, including, but not limited to, joining each others social media sites @ |f you believe a foreign national is contacting you specifically, seek further guidance from your security POC',
        'cost' : 20000,
        'increaseCss' : 30,
        'increaseJs' : 30,
        'increaseHtml' : 30,
        'increaseDesign' : 20,
        'researched' : false
    }
]

//console.log(research);

research.forEach(function(r) {
    $('.research_modal__list').append(`

<div class="item">
<br>
<br>
SecureWorks objective:
<br>

<div class="name">${r.name}<div class="sep"></div></div>

<br>
<div class="stat">
${r.increaseHtml > 0 ? `Operating System <span class="green">+ ${r.increaseHtml}<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/arrowUpStat.png"/></span><div class="sep"></div>` : ''}
${r.increaseCss > 0 ? `Network Security <span class="green">+ ${r.increaseCss}<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/arrowUpStat.png"/></span><div class="sep"></div>` : ''}
${r.increaseJs > 0 ? `DevOps <span class="green">+ ${r.increaseJs}<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/arrowUpStat.png"/></span><div class="sep"></div>` : ''}
${r.increaseDesign > 0 ? `Security Audits <span class="green">+ ${r.increaseDesign}<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/arrowUpStat.png"/></span><div class="sep"></div>` : ''}
<div class="research_button" data-index="${r.index}"><div class="pixelsTop"></div>
<div class="pixelsBottom"></div>CyberQuest <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/rCost.png" /><span class="cost">${r.cost.toLocaleString()}</div></div>
</div>`)
})

$('.auto').click(function(){
    playSound(buttonClick)
    console.log(globals.auto)
    if(globals.auto) {
        $(this).removeClass('on')
        $(this).addClass('off')
        globals.auto = false
    } else {
        $(this).removeClass('off')
        $(this).addClass('on')
        globals.auto = true
    }
})
$('.researchButton').click(function() {
    if(!globals.researching) {
        globals.paused = true;
        $('.overlay, .research_modal').show();

        playSound(buttonClick)
        playSound(slideFast)

        $('.research_modal').show();
        setTimeout(function(){
            $('.research_modal').css('opacity', '1')
        },300)
        $('.overlay').fadeIn(function(){

            setTimeout(function(){
                $('.research_modal').css('height' , '400px')
                $('.research_modal').css('width' , '920px')
                setTimeout(function(){
                    $('.research_modal .hide').fadeIn();
                }, 400)
            },100)
        });
    } else {
        playSound(researchInactive)
    }
    //globals.paused = true;

    $('.research_modal .item').each(function() {
        let index = $(this).find('.research_button').data('index') - 1;





        if(developer.followers > research[index].cost && research[index].researched == false) {
            $(this).addClass('available') 
            $(this).removeClass('unavailable')  
            $(this).removeClass('researched')  
        }

        if(developer.followers < research[index].cost && research[index].researched == false) {
            $(this).addClass('unavailable')   
            $(this).removeClass('available')  
            $(this).removeClass('researched')  
        }

        if(research[index].researched == true) {
            $(this).addClass('researched')   
            $(this).removeClass('available')  
            $(this).removeClass('unavailable')  
        }
    })
})

audioSwitch = 0;
sfxSwitch = 0;

$('.options_sf').click(function(){
    if(sfxSwitch == 0) {
        globals.audio = false
        sfxSwitch = 1;
        $(this).css('opacity','0.4')
    } else {
        globals.audio = true
        sfxSwitch = 0;
        $(this).css('opacity','1')
    }
});
$('.options_bg').click(function(){
    console.log('test')
    if(audioSwitch == 0) {
        $(bg).animate({volume: 0}, 600);
        audioSwitch = 1;
        $(this).css('opacity','0.4')
    } else {
        $(bg).animate({volume: 1}, 600);
        audioSwitch = 0;
        $(this).css('opacity','1')
    }
})

$('.research_modal .close').click(function() {
    playSound(buttonClick)
    $('.research_modal').css('opacity', '0');
    setTimeout(function(){
        $('.overlay').fadeOut();

    },450)

    setTimeout(function(){

        $('.research_modal').attr('style', '');
        $('.research_modal .hide').attr('style', '');
    },1000)

    globals.paused = false;
})


$('body').on('click', '.research_button', function() {
    globals.paused = false;
    let r = $(this).data('index') - 1;
    let stat = research[r].stat;
    let increaseCss = research[r].increaseCss;
    let increaseJs = research[r].increaseJs;
    let increaseHtml = research[r].increaseHtml;
    let increaseDesign = research[r].increaseDesign;


    if(developer.followers > research[r].cost && research[r].researched == false && !globals.researching) {
        globals.researching = true;
        $('.overlay, .research_modal').fadeOut();
        $('.researchProgress').show();
        $('.researchProgress').show()
        playSound(researchClick)



        rp = setInterval(function(){

            $('.bar_inner').addClass('animate')

        },1)


        setTimeout(function() {

            clearInterval(rp)
            developer.css += increaseCss
            developer.js += increaseJs
            developer.html += increaseHtml
            developer.design += increaseDesign

            research[r].researched = true;

            $('.researchProgress').hide()
            globals.researching = false;

            //console.log(research[r].stat);
            playSound(researchComplete)
            updateMyStatsUi(); 
        }, globals.researchTime)

    } else {
        playSound(researchInactive)
    }

})


const statColors = {
    'html' : '#f16529',
    'css' : '#2965f1',
    'js' : '#d87b17',
    'design' : '#9d28e0'
}

var developer = {
    'name'      : 'Jamie',
    'level'     : 1,
    'html'      : 3,
    'css'       : 3,
    'js'        : 3,
    'design'    : 3,
    'followers' : 0
}

var pen = {
    'name' : 'Pen',
    'css'  : 0,
    'html' : 0,
    'js'   : 0,
    'design': 0
}

var pens = [];
updateMyStatsUi()
document.addEventListener("keyup", keyPress, false);

var progress = 0;

kS = 0;

function keyPress() {

    // console.log(globals.makingPen)
    // console.log(progress)


    if(progress > 0) {
        $('.startMashing h2 span').html("Checking emails from the Chief Privacy Officer")
    }

    if(progress > 20) {
        $('.startMashing h2 span').html("Setting up company firewall configurations")
    }

    if(progress > 40) {
        $('.startMashing h2 span').html("Doing a SecureWorks cybersecurity audit")
    }

    if(progress > 70) {
        $('.startMashing h2 span').html("Leveraging automated evidence collection")
    }

    if(progress > 99) {
        $('.startMashing h2 span').html("Fortune 500 customer meeting")
    }
    if(globals.makingPen && progress != 100 ) {
        if(!globals.researching && !globals.paused) {
            progress += globals.typeIncrement



            //   console.log('test')

            $('.pen_bar_progress').width(progress + '%');

            // Create a random number between 0 and the penStatChance variable
            let add =  Math.floor(Math.random() * globals.penStatAddChance) + (globals.penStatAddChance - 2);

            if(add == globals.penStatAddChance) {

                // Each keystroke, IF random check passes, pick a number between 1 and 3
                let stat =  Math.floor(Math.random() * 4) + 1;

                console.log(kS)
                if(kS < statAddSounds.length - 1) {

                    console.log
                    kS++
                } else {
                    kS = 0
                }

                playSound(statAddSounds[kS])

                // Assign a stat based on the integer
                if(stat == 1) {
                    let htmlStat = Math.floor(Math.random() * developer.html) + 1;
                    pen.html = pen.html + htmlStat;
                    makePip(statColors.html, htmlStat, 'html');
                }

                if(stat == 2) {
                    let cssStat = Math.floor(Math.random() * developer.css) + 1;
                    pen.css = pen.css + cssStat;
                    makePip(statColors.css, cssStat, 'css');
                }

                if(stat == 3) {
                    let jsStat = Math.floor(Math.random() * developer.js) + 1;
                    pen.js = pen.js + jsStat;
                    makePip(statColors.js, jsStat, 'js');
                }

                if(stat == 4) {
                    let designStat = Math.floor(Math.random() * developer.design) + 1;
                    pen.design = pen.design + designStat;
                    makePip(statColors.design, designStat, 'design');
                }
            }
            updateStatUi();
        }


    } else {
        $('.complete_modal').show();
        playSound(featured)
        setTimeout(function(){
            playSound(slideFast)
        },400)

        setTimeout(function(){
            $('.complete_modal').css('opacity', '1')
        },300)
        $('.overlay').fadeIn(function(){

            setTimeout(function(){
                $('.complete_modal').css('height' , '370px')
                $('.complete_modal').css('width' , '600px')
                setTimeout(function(){
                    $('.complete_modal div.hide').fadeIn();
                }, 300)
            },100)
        });



        $('.complete_modal .html span span').html(pen.html)

        $('.complete_modal .css span span').html(pen.css)
        $('.complete_modal .js span span').html(pen.js)
        $('.complete_modal .design span span').html(pen.design)
        globals.paused = true;

    }
}






function updateStatUi() { 
    $('.pen_css span.val').html(pen.css.toLocaleString());
    $('.pen_html span.val').html(pen.html.toLocaleString());
    $('.pen_js span.val').html(pen.js.toLocaleString());
    $('.pen_design span.val').html(pen.design.toLocaleString());
}

$('.make').click(function() {
    globals.makingPen = true;
    penProgressEl.show();
    $('.make').hide();
});

function makePip(stat, int, type) {
    $('body').append(`<div class="pip" data-type="${type}"><div class="pixelsTop"></div><div class="pixelsBottom"></div><p style="color:${stat};">${int}</p></div>`);
}


$('.release').click(function() {
    playSound(buttonClick)
    release(pen)
    globals.paused = false;
    playSound(slideSlow)
})

$('.scrap').click(function(){
    playSound(buttonClick)
    globals.paused = false;
    $('.startMashing h2 span').html("start pressing keys")

    $('.complete_modal').fadeOut();

    setTimeout(function(){
        $('.overlay').fadeOut()
    }, 450)


    progress = 0;
    $('.pen_bar_progress').width(0);

    pen.css = 0;
    pen.html = 0;
    pen.js = 0;
    pen.design = 0;

    setTimeout(function(){
        // console.log(';test')
        $('.complete_modal').attr('style', '');
        $('.complete_modal div').attr('style', '');
    },2000)

    updateStatUi();
})


function release(p) {
    $('.startMashing h2 span').html("start pressing keys")
    progress = 0;

    //  console.log('12')
    $('.releasedEmpty').remove();


    $('.overlay').fadeOut();
    $('.complete_modal').css('height','61px')
    $('.complete_modal').css('width','299px')
    $('.complete_modal').css( 'top', '298px')   
    $('.complete_modal').css( 'left', '100%') 
    $('.complete_modal').css( 'transform', 'translateX(calc(-100% - 57px))')

    setTimeout(function(){
        $('.released_pen').css('height', '150px')
    },210)
    setTimeout(function(){
        $('.released_pen').css('opacity', '1');

        $('.released_pen__bottom').css('top','-10px')

    },510)

    setTimeout(function(){
        $('.complete_modal').css('opacity', '0');
    },850)

    setTimeout(function(){
        // console.log(';test')
        $('.complete_modal').attr('style', '');
        $('.complete_modal div').attr('style', '');
    },2000)




    $('.complete_modal div').css('opacity', '0')
    let name =  Math.floor(Math.random() * penNames.length);

    let newPen = {
        'name' : penNames[name],
        'css'  : p.css,
        'html' : p.html,
        'js'   : p.js, 
        'design' : p.design,
        'views' : 0,
        'maxViews' : ((Math.ceil((p.css + p.js + p.html + p.design) * globals.viewMultiplier) + 1)* (pens.length + 1 / 10)) ,
        'dailyViews' : ((Math.ceil((p.css + p.js + p.html + p.design) * globals.viewMultiplier) + 1)* (pens.length + 1/ 10)),
        'comments' : 0,
        'likes' : 0,
        'featured' : false,
        'featuredBoosted' : false,
        'featuredCheck' : false,
        'featuredCheckCount' : 0
    }

    pens.push(newPen);

    $('.pen_bar_progress').width(0);

    pen.css = 0;
    pen.html = 0;
    pen.js = 0;
    pen.design = 0;

    updateStatUi();
    setTimeout(function(){
        $('.released').prepend(`<div class="released_pen" style="opacity:0"><div class="released_pen__top"><div class="pixelsTop"></div><div class="pixelsBottom"></div><span class="name">${pens[pens.length - 1].name}</span><div class="star"></div><div class="released_pen__graph"></div></div><div class="released_pen__bottom"><div class="pixelsTop"></div><div class="pixelsBottom"></div><img class="views" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/codepenViews.png" /><span class="view_count">${pens[pens.length - 1].views}</span><div class="sep"></div><img class="likes" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/codepenLikes.png" /><span class="like_count"> ${pens[pens.length - 1].likes}</span><div class="sep"></div><img class="comments" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/codepenComments.png" /><span class="comment_count"> ${pens[pens.length - 1].comments}</span></div></div>`)

    }, 1)


}
const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                   ];
var time = 0;

const rootStatElementPosition = {
    'design' : '550px',
    'html' : '-550px',
    'css' : '-176px',
    'js' : '180px'
}

const pickers = [
    'marie mosely',
    'tim holman',
    'chris coyier',
    'codepen'
]
//console.log(rootStatElementPosition)

d = 0;

$('.awesome').click(function(){
    playSound(buttonClick)
    $('.overlay, .featured_modal').fadeOut();
    globals.paused = false;
})
function feature(penName) {
    globals.paused = true;
    $('.overlay, .featured_modal').show();

    let p =  Math.floor(Math.random() * pickers.length);

    $('.featured_modal .picker').html(pickers[p])
    $('.featured_modal .name').html(penName)
}

function gameLoop() {
    if(d == globals.gameLength) {
        globals.paused = true;
        $('.endGame, .overlay').show()
    }
    if(!globals.paused){
        time++;
        $('.researchButton_counter span').html($('.available').length)


        $('.pip').each(function() {

            // console.log($(this).data('type'))
            if($(this).data('type') == 'html') {
                $(this).animate({ left: rootStatElementPosition.html, top: '140px' }, 2000, function(){
                    $(this).remove();
                });
            }

            if($(this).data('type') == 'css') {
                $(this).animate({ left: rootStatElementPosition.css, top: '140px' }, 1000, function(){
                    $(this).remove();
                });
            }

            if($(this).data('type') == 'js') {
                $(this).animate({ left: rootStatElementPosition.js, top: '140px' }, 1000, function(){
                    $(this).remove();
                });
            }

            if($(this).data('type') == 'design') {
                $(this).animate({ left: rootStatElementPosition.design, top: '140px' }, 1000, function(){
                    $(this).remove();
                });
            }

        })
        if(globals.auto && !globals.researching && !globals.paused) {
            if(time > globals.keyTick) {
                keyPress()
            }
        }
        if(time > globals.timerTick) {

            time = 0;
            d++;
            var day = new Date();


            var nextDay = new Date(day);

            nextDay.setDate(day.getDate() + d);

            let month = nextDay.getUTCMonth();
            let days = nextDay.getDate();
            let year = nextDay.getFullYear();
            //console.log(d)



            $('.date span').html(`${monthNames[month]} ${days}, ${year}`) 


            $('.research_modal .item').each(function() {



                let index = $(this).find('.research_button').data('index') - 1;


                if(developer.followers > research[index].cost && research[index].researched == false) {
                    $(this).addClass('available') 
                    $(this).removeClass('unavailable')  
                    $(this).removeClass('researched')  
                }

                if(developer.followers < research[index].cost && research[index].researched == false) {
                    $(this).addClass('unavailable')   
                    $(this).removeClass('available')  
                    $(this).removeClass('researched')  
                }

                if(research[index].researched == true) {
                    $(this).addClass('researched')   
                    $(this).removeClass('available')  
                    $(this).removeClass('unavailable')  
                }
            })

            $('.released_pen').each(function() {
                let index = pens.length - $(this).index() - 1;
                let height = Math.ceil(pens[index].dailyViews / pens[index].maxViews * 100);

                if(pens[index].featured) {
                    $(this).find('.star').html('<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/gStar.png" />')   
                }
                if(height > 100) {
                    $(this).find('.released_pen__graph').append(`<div class="line" style="height:${height}%; top:${0}%"></div>`);
                } else {
                    $(this).find('.released_pen__graph').append(`<div class="line" style="height:${height}%; top:${100 - height}%"></div>`);
                }


                let el = $(this);


                if(el.find('.line').length > globals.maxBars) {
                    el.find('.line:first-child').remove();
                }

                let final = Math.ceil(pens[index].views).toLocaleString();
                $(this).find('.view_count').html(final);

                let comment = Math.ceil(pens[index].comments).toLocaleString();
                $(this).find('.comment_count').html(comment);

                let like = Math.ceil(pens[index].likes).toLocaleString();
                $(this).find('.like_count').html(like);

            });

            var dailyFollowers = 0;

            pens.forEach(function(p) {
                if(p.css + p.html + p.css + p.design > globals.featuredMinStats) {
                    let f = Math.floor(Math.random() * globals.featureChance);
                    console.log(p.name + ' Could get featured');
                    console.log('Random roll is ' + f);
                    console.log(p.featuredCheck)
                    console.log(p.featuredCheckCount)
                    if(f == 0 && !p.featuredCheck){

                        if(p.featuredCheckCount < 14) {
                            console.log('featured')
                            p.featured = true;
                        }




                    } else {
                        p.featuredCheckCount++; 

                    }

                }
                if(p.featured && !p.featuredBoosted) {
                    p.dailyViews = p.dailyViews * globals.featuredBoost;
                    p.featuredBoosted = true;
                    feature(p.name)
                    playSound(featuredModal)
                }

                p.dailyViews = (p.dailyViews / globals.viewDecay);
                p.likes += Math.floor((p.dailyViews / globals.viewDecay) / 25);
                p.comments += Math.floor((p.dailyViews / globals.viewDecay) / 1000);

                p.views += p.dailyViews;


                dailyFollowers += p.dailyViews
            });

            developer.followers += Math.floor((dailyFollowers / globals.followerFriction) / ((developer.html + developer.css +developer.js + developer.design) / 10) );

            $('.followers span').html(developer.followers.toLocaleString());
            $('.endGame h1').html(developer.followers.toLocaleString());

        }
    }


    window.requestAnimationFrame(gameLoop);

}

$('.go').click(function(){
    playSound(buttonClick)
    $('.intro_modal').fadeOut(function(){
        $('.overlay').fadeOut();
        globals.paused = false
    })
})
window.requestAnimationFrame(gameLoop);
'use strict';

///console.clear();

class Grain {
    constructor (el) {
        /**
     * Options
     * Increase the pattern size if visible pattern
     */
        this.patternSize = 150;
        this.patternScaleX = 1;
        this.patternScaleY = 1;
        this.patternRefreshInterval = 3; // 8
        this.patternAlpha = 12; // int between 0 and 255,

        /**
     * Create canvas
     */
        this.canvas = el;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.patternScaleX, this.patternScaleY);

        /**
     * Create a canvas that will be used to generate grain and used as a
     * pattern on the main canvas.
     */
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.patternSize;
        this.patternCanvas.height = this.patternSize;
        this.patternCtx = this.patternCanvas.getContext('2d');
        this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
        this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4

        /**
     * Prebind prototype function, so later its easier to user
     */
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);

        this.frame = 0;

        window.addEventListener('resize', this.resize);
        this.resize();

        window.requestAnimationFrame(this.loop);
    }

    resize () {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
    }

    update () {
        const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;

        // put a random shade of gray into every pixel of the pattern
        for (let i = 0; i < patternPixelDataLength; i += 4) {
            // const value = (Math.random() * 255) | 0;
            const value = Math.random() * 255;

            patternData.data[i] = value;
            patternData.data[i + 1] = value;
            patternData.data[i + 2] = value;
            patternData.data[i + 3] = patternAlpha;
        }

        patternCtx.putImageData(patternData, 0, 0);
    }

    draw () {
        const {ctx, patternCanvas, canvas, viewHeight} = this;
        const {width, height} = canvas;

        // clear canvas
        ctx.clearRect(0, 0, width, height);

        // fill the canvas using the pattern
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, width, height);
    }

    loop () {
        // only update grain every n frames
        const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
        if (shouldDraw) {
            this.update();
            this.draw();
        }

        window.requestAnimationFrame(this.loop);
    }
}


/**
 * Initiate Grain
 */
const el = document.querySelector('.grain');
const grain = new Grain(el);


$('input').keydown(function(e){
    console.log('sdfsd')
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
        if($('input').val() != '') {
            playSound(buttonClick)
            $('.name_modal').css('left','-200%');
            $('.intro_modal').css('left','0%');
            $('.username h2').html($('input').val())
            playAudio(bg)
        } else {
            $('input').css('border-color', '#f16059')
        }
        return false;
    }
})

$('.next').click(function() {

    if($('input').val() != '') {
        playSound(buttonClick)
        $('.name_modal').css('left','-200%');
        $('.intro_modal').css('left','0%');
        $('.username h2').html($('input').val())
        playAudio(bg)
    } else {
        $('input').css('border-color', '#f16059')
    }
})
function animateValue(c, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = $('.' + c)
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// ## Create a function to play our sounds
function playSound(sound) {
    if (globals.audio) {

        sound.play(); // Play sound
    }
}

function playAudio(sound) {

    sound.loop = true;
    sound.volume = 0.5;
    sound.play(); // Play sound

}
