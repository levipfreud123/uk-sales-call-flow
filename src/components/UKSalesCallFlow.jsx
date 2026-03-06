import React, { useState } from 'react';
const colors = {
  primary: '#3533ff',
  accent: '#b1db00',
  lightBlue: '#a3e1f0',
  dark: '#101626',
  white: '#ffffff',
  gray: '#f5f5f5',
  darkGray: '#666666',
  warning: '#ff6b35',
  success: '#22c55e',
  pro: '#9333ea',
};
const teacherData = {
  'Year 5': {
    Maths: { name: 'Neil Trivedi', credentials: '9+ years teaching, 1st Class in Maths from UCL', timetable: 'Mon & Thu 16:30-17:15' },
    English: { name: 'Louis Provis', credentials: '11+ years teaching, MAs from Cambridge & Oxford', timetable: 'Tue & Fri 16:30-17:15' },
    Science: { name: 'Lajoy Tucker, Hannah Shuter & Emma Williams', credentials: '40+ years combined', timetable: 'Tue & Thu 17:40-18:25' },
    '11+': { name: 'Nick Featherstone & Louis Provis', credentials: '26+ years combined', timetable: 'Wed 16:30-17:30, Fri 17:40-18:40' },
  },
  'Year 6': {
    Maths: { name: 'Nick Featherstone', credentials: '15+ years teaching, Masters from Oxford', timetable: 'Mon & Wed 17:40-18:25' },
    English: { name: 'Eleanor St John Sutton', credentials: '6+ years teaching, Double 1st from UPenn', timetable: 'Mon & Wed 16:30-17:15' },
    Science: { name: 'Lajoy Tucker, Hannah Shuter & Emma Williams', credentials: '40+ years combined', timetable: 'Tue & Thu 17:40-18:25' },
  },
  'Year 7': {
    Maths: { name: 'Nick Featherstone', credentials: '15+ years teaching, Masters from Oxford', timetable: 'Mon & Fri 16:30-17:30' },
    English: { name: 'Louis Provis', credentials: '11+ years teaching, MAs from Cambridge & Oxford', timetable: 'Mon & Fri 17:40-18:40' },
    Science: { name: 'Hannah Shuter, Emma Williams & Davinder Bhachu', credentials: '40+ years combined', timetable: 'Tue & Thu 17:40-18:40' },
  },
  'Year 8': {
    Maths: { name: 'Neil Trivedi', credentials: '9+ years teaching, 1st Class from UCL', timetable: 'Tue & Wed 16:30-17:30' },
    English: { name: 'Eleanor St John Sutton', credentials: '6+ years teaching, Double 1st from UPenn', timetable: 'Mon & Wed 17:40-18:40' },
    Science: { name: 'Emma Williams, Manny Opoku & Hannah Shuter', credentials: '35+ years combined', timetable: 'Tue & Thu 17:40-18:40' },
  },
  'Year 9': {
    Maths: { name: 'Joe Sim', credentials: '6 years teaching, 1st Class from Warwick', timetable: 'Mon & Wed 18:50-19:50' },
    English: { name: 'Alex Sarychkin', credentials: '11+ years teaching, BA from QMUL', timetable: 'Tue 20:00-21:00, Thu 17:40-18:40' },
    Science: { name: 'Manny Opoku, Emma Williams & Dario Papavassilou', credentials: '35+ years combined', timetable: 'Tue & Thu 18:50-19:50' },
  },
  'Year 10': {
    Maths: { name: 'Neil Trivedi', credentials: '9+ years teaching, 1st Class from UCL', timetable: 'Tue & Thu 17:40-18:40' },
    English: { name: 'Alex Sarychkin & Eleanor St John Sutton', credentials: '17+ years combined', timetable: 'Mon & Thu 18:50-19:50' },
    Biology: { name: 'Joe Wolfensohn', credentials: '5+ years teaching, 1st Class Biochemistry from QMUL', timetable: 'Mon & Wed 16:30-17:30' },
    Chemistry: { name: 'Manny Opoku', credentials: '5+ years teaching, BSc from Imperial', timetable: 'Wed & Fri 17:40-18:40' },
    Physics: { name: 'Dario Papavassilou', credentials: '6+ years teaching, 1st Class MSc & PhD', timetable: 'Tue & Thu 16:30-17:30' },
  },
  'Year 11': {
    Maths: { name: 'Joe Sim (Foundation) & Guy Maycock (Higher)', credentials: '18+ years combined, 10+ years examining', timetable: 'Mon & Wed 17:40-18:40' },
    English: { name: 'Louis Provis & Alex Sarychkin', credentials: '22+ years combined', timetable: 'Mon 20:00-21:00, Tue 17:40-18:40' },
    Biology: { name: 'Emma Williams (F) & Laura Armstrong (H)', credentials: '42+ years combined, 10+ years examining', timetable: 'F: Tue/Thu 20:00 | H: Mon/Tue 16:30' },
    Chemistry: { name: 'Manny Opoku (F) & Lajoy Tucker (H)', credentials: '16+ years combined, MSc from Oxford', timetable: 'Wed 18:50, Thu 16:30' },
    Physics: { name: 'Hannah Shuter (F) & Brook Edgar (H)', credentials: '13+ years combined', timetable: 'Tue & Thu 18:50-19:50' },
  },
  'Year 12': {
    Maths: { name: 'Guy Maycock', credentials: '12+ years teaching, 10+ years A-Level examining', timetable: 'Wed 16:30, Thu 18:50' },
    Biology: { name: 'Laura Armstrong (AQA) & Joe Wolfensohn (OCR)', credentials: '22+ years combined, 10+ years examining', timetable: 'AQA: Wed/Thu | OCR: Wed/Thu' },
    Chemistry: { name: 'Manny Opoku (AQA) & Davinder Bhachu (OCR)', credentials: '14+ years combined, Imperial & UCL', timetable: 'AQA: Tue/Fri | OCR: Mon/Tue' },
    Physics: { name: 'Dario Papavassilou', credentials: '6+ years teaching, 1st Class MSc & PhD', timetable: 'Tue 20:00, Thu 17:40' },
    'Further Maths': { name: 'Guy Maycock', credentials: '12+ years teaching, 10+ years examining', timetable: 'Mon 18:50, Tue 17:40' },
    'English Literature': { name: 'Eleanor St John Sutton', credentials: '6+ years teaching, Double 1st from UPenn', timetable: 'Wed 18:50, Fri 16:30' },
  },
  'Year 13': {
    Maths: { name: 'Neil Trivedi', credentials: '9+ years teaching, 1st Class from UCL', timetable: 'Tue 19:20, Thu 18:50' },
    Biology: { name: 'Laura Armstrong (AQA) & Joe Wolfensohn (OCR)', credentials: '22+ years combined, 10+ years examining', timetable: 'Mon & Tue 17:40-19:10' },
    Chemistry: { name: 'Lajoy Tucker (AQA) & Davinder Bhachu (OCR)', credentials: '20+ years combined, Oxford & UCL', timetable: 'Mon & Wed 19:20-20:50' },
    Physics: { name: 'Brook Edgar', credentials: '6+ years teaching, 1st Class BSc & MSc', timetable: 'Wed 17:40, Fri 16:30' },
    'Further Maths': { name: 'Nick Featherstone', credentials: '15+ years teaching, Masters from Oxford', timetable: 'Thu 16:30, Fri 18:50' },
    'English Literature': { name: 'Eleanor St John Sutton', credentials: '6+ years teaching, Double 1st from UPenn', timetable: 'Wed 18:50, Fri 16:30' },
  },
};
const timetableLinks = {
  'Year 5': 'https://myedspace.co.uk/Year5-Timetable',
  'Year 6': 'https://myedspace.co.uk/Year6-Timetable',
  'Year 7': 'https://myedspace.co.uk/Year7-Timetable',
  'Year 8': 'https://myedspace.co.uk/Year8-Timetable',
  'Year 9': 'https://myedspace.co.uk/Year9-Timetable',
  'Year 10': 'https://myedspace.co.uk/Year10-Timetable',
  'Year 11': 'https://myedspace.co.uk/Year11-Timetable',
  'Year 12': 'https://myedspace.co.uk/Year12-Timetable',
  'Year 13': 'https://myedspace.co.uk/Year13-Timetable',
};
const curriculumLinks = {
  'Year 5': { Maths: 'https://myedspace.co.uk/Year5-Maths-Curriculum', English: 'https://myedspace.co.uk/Year5-English-Curriculum', Science: 'https://myedspace.co.uk/Year5-6-Science-Curriculum', '11+': 'https://myedspace.co.uk/Year5-11+-Curriculum' },
  'Year 6': { Maths: 'https://myedspace.co.uk/Year6-Maths-Curriculum', English: 'https://myedspace.co.uk/Year6-English-Curriculum', Science: 'https://myedspace.co.uk/Year5-6-Science-Curriculum' },
  'Year 7': { Maths: 'https://myedspace.co.uk/Year7-Maths-Curriculum', English: 'https://myedspace.co.uk/Year7-English-Curriculum', Science: 'https://myedspace.co.uk/Year7-Science-Curriculum' },
  'Year 8': { Maths: 'https://myedspace.co.uk/Year8-Maths-Curriculum', English: 'https://myedspace.co.uk/Year8-English-Curriculum', Science: 'https://myedspace.co.uk/Year8-Science-Curriculum' },
  'Year 9': { Maths: 'https://myedspace.co.uk/Year9-Maths-Curriculum', English: 'https://myedspace.co.uk/Year9-English-Curriculum', Science: 'https://myedspace.co.uk/Year9-Science-Curriculum' },
  'Year 10': { Maths: 'https://myedspace.co.uk/Year10-Maths-Curriculum', English: 'https://myedspace.co.uk/Year10-English-Group1-Curriculum', Biology: 'https://myedspace.co.uk/Year10-Biology-Curriculum', Chemistry: 'https://myedspace.co.uk/Year10-Chemistry-Curriculum', Physics: 'https://myedspace.co.uk/Year10-Physics-Curriculum' },
  'Year 11': { Maths: 'https://myedspace.co.uk/Year11-Maths-Higher-Curriculum', English: 'https://myedspace.co.uk/Year11-English-Group1-Curriculum', Biology: 'https://myedspace.co.uk/Year11-Biology-Higher-Curriculum', Chemistry: 'https://myedspace.co.uk/Year11-Chemistry-Higher-Curriculum', Physics: 'https://myedspace.co.uk/Year11-Physics-Higher-Curriculum' },
  'Year 12': { Maths: 'https://myedspace.co.uk/Year12-Maths-Curriculum', Biology: 'https://myedspace.co.uk/Year12-Biology-AQA-Curriculum', Chemistry: 'https://myedspace.co.uk/Year12-Chemistry-AQA-Curriculum', Physics: 'https://myedspace.co.uk/Year12-Physics-Curriculum', 'Further Maths': 'https://myedspace.co.uk/Year12-Further-Maths-Curriculum' },
  'Year 13': { Maths: 'https://myedspace.co.uk/Year13-Maths-Curriculum', Biology: 'https://myedspace.co.uk/Year13-Biology-AQA-Curriculum', Chemistry: 'https://myedspace.co.uk/Year13-Chemistry-AQA-Curriculum', Physics: 'https://myedspace.co.uk/Year13-Physics-Curriculum', 'Further Maths': 'https://myedspace.co.uk/Year13-Further-Maths-Curriculum' },
};
// Pricing per year group — annual prices are uniform, but original prices and lesson counts vary by year group
const getLessonsForYearGroup = (yg, subjectCount, isMultiYear) => {
  const perSubject = isMultiYear
    ? (['Year 11'].includes(yg) ? 132 : ['Year 10', 'Year 12'].includes(yg) ? 140 : 148)
    : (['Year 11', 'Year 13'].includes(yg) ? 66 : 74);
  if (subjectCount >= 3) {
    // Ultimate Pass lesson counts from tables
    if (isMultiYear) {
      if (yg === 'Year 9') return 592;
      if (yg === 'Year 10') return 700;
      if (yg === 'Year 11') return 660;
      if (yg === 'Year 12') return 420;
      return 444;
    } else {
      if (yg === 'Year 10') return 370;
      if (yg === 'Year 11') return 330;
      if (yg === 'Year 13') return 198;
      return 222;
    }
  }
  return perSubject * subjectCount;
};
const getOriginalPrice = (yg, subjectCount, isMultiYear) => {
  const tier = subjectCount >= 3 ? 'ultimate' : subjectCount;
  if (isMultiYear) {
    // Table 5: Standard Multi-Year originals
    const isY10Y11Y12 = ['Year 10', 'Year 11', 'Year 12'].includes(yg);
    if (tier === 1) return isY10Y11Y12 ? 1200 : 1280;
    if (tier === 2) return isY10Y11Y12 ? 2160 : 2304;
    return isY10Y11Y12 ? 2700 : 2880;
  } else {
    // Table 3: Standard Current Year originals
    const isY11Y13 = ['Year 11', 'Year 13'].includes(yg);
    if (tier === 1) return isY11Y13 ? 400 : 480;
    if (tier === 2) return isY11Y13 ? 720 : 864;
    return isY11Y13 ? 900 : 1080;
  }
};
const getProOriginalPrice = (yg, subjectCount, isMultiYear) => {
  const tier = subjectCount >= 3 ? 'ultimate' : subjectCount;
  if (isMultiYear) {
    // Table 9: Pro Multi-Year originals
    const isY10Y11Y12 = ['Year 10', 'Year 11', 'Year 12'].includes(yg);
    if (tier === 1) return isY10Y11Y12 ? 1650 : 1760;
    if (tier === 2) return isY10Y11Y12 ? 2970 : 3168;
    return isY10Y11Y12 ? 3600 : 3840;
  } else {
    // Table 7: Pro Current Year originals
    const isY11Y13 = ['Year 11', 'Year 13'].includes(yg);
    if (tier === 1) return isY11Y13 ? 550 : 660;
    if (tier === 2) return isY11Y13 ? 990 : 1188;
    return isY11Y13 ? 1200 : 1440;
  }
};
const standardPricing = {
  currentYear: { 1: { annual: 269 }, 2: { annual: 484.20 }, ultimate: { annual: 639 } },
  multiYear: { 1: { annual: 639 }, 2: { annual: 1150.20 }, ultimate: { annual: 1519 } },
  monthly: { 1: 80, 2: 144, ultimate: 180 },
};
const proPricing = {
  currentYear: { 1: { annual: 369 }, 2: { annual: 664.20 }, ultimate: { annual: 809 } },
  multiYear: { 1: { annual: 929 }, 2: { annual: 1672.20 }, ultimate: { annual: 1899 } },
  monthly: { 1: 110, 2: 198, ultimate: 240 },
};
const subjectsByYear = {
  'Year 5': ['Maths', 'English', 'Science', '11+'],
  'Year 6': ['Maths', 'English', 'Science'],
  'Year 7': ['Maths', 'English', 'Science'],
  'Year 8': ['Maths', 'English', 'Science'],
  'Year 9': ['Maths', 'English', 'Science'],
  'Year 10': ['Maths', 'English', 'Biology', 'Chemistry', 'Physics'],
  'Year 11': ['Maths', 'English', 'Biology', 'Chemistry', 'Physics'],
  'Year 12': ['Maths', 'Biology', 'Chemistry', 'Physics', 'Further Maths', 'English Literature'],
  'Year 13': ['Maths', 'Biology', 'Chemistry', 'Physics', 'Further Maths', 'English Literature'],
};
const yearGroups = ['Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13', 'Other'];
const emptyChild = { name: '', yearGroup: '', subjects: [] };
export default function UKSalesCallFlow() {
  const [viewMode, setViewMode] = useState('sales');
  const [selectedTrack, setSelectedTrack] = useState('A');
  const [currentStep, setCurrentStep] = useState('open');
  const [children, setChildren] = useState([{ ...emptyChild }]);
  const [painPoints, setPainPoints] = useState('');
  const [desiredOutcome, setDesiredOutcome] = useState('');
  const [pastAttempts, setPastAttempts] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isPro, setIsPro] = useState(false);
  const [showAllObjections, setShowAllObjections] = useState(false);
  const [activeObjection, setActiveObjection] = useState(null);
  const [showSalesPricing, setShowSalesPricing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [trialSection, setTrialSection] = useState('touches');
  const [showTrialPricing, setShowTrialPricing] = useState(false);
  const [showTrialObjections, setShowTrialObjections] = useState(false);
  const [copiedTrial, setCopiedTrial] = useState(null);
  const copyTrialText = (id, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedTrial(id);
      setTimeout(() => setCopiedTrial(null), 1500);
    }).catch(() => {});
  };
  const CopyBtn = ({ id, text }) => (
    <button onClick={() => copyTrialText(id, text)} style={{ position: 'absolute', top: '8px', right: '8px', padding: '4px 10px', background: copiedTrial === id ? colors.success : '#e8e8e8', color: copiedTrial === id ? colors.white : colors.darkGray, border: 'none', fontSize: '10px', fontWeight: '700', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>{copiedTrial === id ? 'COPIED' : 'COPY'}</button>
  );
  const clearAll = () => {
    setChildren([{ ...emptyChild }]);
    setPainPoints('');
    setDesiredOutcome('');
    setPastAttempts('');
    setAdditionalNotes('');
    setCurrentStep('open');
    setActiveObjection(null);
    setShowAllObjections(false);
    setShowSalesPricing(false);
  };
  const primaryChild = children[0];
  const hasSiblings = children.length > 1;
  const pricing = isPro ? proPricing : standardPricing;

  const effectiveYearGroup = (child) => child.yearGroup;
  const isMultiYear = (yg) => yg === 'Year 10' || yg === 'Year 12';
  const isExamYear = (yg) => yg === 'Year 11' || yg === 'Year 13';
  const isGCSERange = (yg) => ['Year 9', 'Year 10', 'Year 11'].includes(yg);
  const allChildNames = () => {
    const names = children.map(c => c.name || '[Child]');
    if (names.length === 1) return names[0];
    if (names.length === 2) return `${names[0]} and ${names[1]}`;
    return names.slice(0, -1).join(', ') + ', and ' + names[names.length - 1];
  };
  const childOrChildren = () => hasSiblings ? 'children' : 'child';
  const steps = [
    { id: 'open', label: '1. OPEN' },
    { id: 'clarify', label: '2. CLARIFY' },
    { id: 'zombies', label: '3. ZOMBIES' },
    { id: 'label', label: '4. LABEL' },
    { id: 'overview', label: '5. PAIN' },
    { id: 'sell', label: '6. SELL' },
    { id: 'close', label: '7. CLOSE' },
    { id: 'confirm', label: '8. CONFIRM' },
    { id: 'objections', label: 'OBJECTIONS' },
  ];
  const goToNextStep = () => {
    const currentIndex = steps.findIndex(s => s.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
      setActiveObjection(null);
    }
  };
  const updateChild = (index, field, value) => {
    const updated = [...children];
    updated[index] = { ...updated[index], [field]: value };
    if (field === 'yearGroup') updated[index].subjects = [];
    setChildren(updated);
  };
  const addSibling = () => setChildren([...children, { ...emptyChild }]);
  const removeSibling = (index) => setChildren(children.filter((_, i) => i !== index));
  const toggleSubject = (index, subj) => {
    const child = children[index];
    const newSubjects = child.subjects.includes(subj) ? child.subjects.filter(s => s !== subj) : [...child.subjects, subj];
    updateChild(index, 'subjects', newSubjects);
  };
  const getPricing = (child) => {
    const yg = child.yearGroup;
    const subjectCount = child.subjects.length || 1;
    const multi = isMultiYear(yg);

    const priceTable = multi ? pricing.multiYear : pricing.currentYear;
    const tier = subjectCount >= 3 ? 'ultimate' : subjectCount;
    const tierData = priceTable[tier] || priceTable[1];
    const monthlyTier = tier === 'ultimate' || subjectCount >= 3 ? 'ultimate' : tier;
    const monthlyPrice = pricing.monthly[monthlyTier] || pricing.monthly[1];
    const lessons = getLessonsForYearGroup(yg, subjectCount, multi);
    const original = isPro ? getProOriginalPrice(yg, subjectCount, multi) : getOriginalPrice(yg, subjectCount, multi);
    const annual = tierData.annual;
    const phoneDiscount = annual * 0.95;

    return {
      annual, original, lessons, monthly: monthlyPrice,
      instalments3: (annual / 3).toFixed(2), upfront: (annual * 0.95).toFixed(2),
      phonePrice: phoneDiscount.toFixed(2), saving: (original - annual).toFixed(0),
      phoneSaving: (original - phoneDiscount).toFixed(0), pricePerHour: (annual / lessons).toFixed(2),
      subjectCount, lessonsPerMonth: subjectCount * 8, tutorCost: subjectCount * 8 * 50, isMultiYear: multi,
    };
  };
  const getTotalPricing = () => {
    if (children.length === 1) return getPricing(primaryChild);
    const prices = children.map(c => getPricing(c)).sort((a, b) => b.annual - a.annual);
    const fullPrice = prices[0].annual;
    const discountedPrices = prices.slice(1).map(p => p.annual * 0.8);
    const total = fullPrice + discountedPrices.reduce((a, b) => a + b, 0);
    const monthlyPrices = children.map(c => ({ ...getPricing(c), childName: c.name })).sort((a, b) => b.monthly - a.monthly);
    const totalMonthly = monthlyPrices[0].monthly + monthlyPrices.slice(1).reduce((acc, p) => acc + p.monthly * 0.8, 0);
    return {
      total, phoneTotal: (total * 0.95).toFixed(2),
      totalMonthly,
      monthlyBreakdown: monthlyPrices.map((p, i) => ({ ...p, discounted: i > 0, finalMonthly: i === 0 ? p.monthly : p.monthly * 0.8 })),
      breakdown: prices.map((p, i) => ({ ...p, discounted: i > 0, finalPrice: i === 0 ? p.annual : p.annual * 0.8 })),
      instalments3: (total / 3).toFixed(2), upfront: (total * 0.95).toFixed(2),
    };
  };
  const getTeacherInfo = (child) => {
    const yg = child.yearGroup;
    if (!yg || yg === 'Other' || child.subjects.length === 0) return null;
    const teachers = teacherData[yg];
    if (!teachers) return null;
    const relevantTeachers = child.subjects.map(subj => ({ subject: subj, ...teachers[subj] })).filter(t => t.name);
    const totalYears = relevantTeachers.reduce((acc, t) => { const match = t.credentials.match(/(\d+)\+?\s*years/); return acc + (match ? parseInt(match[1]) : 5); }, 0);
    return { teachers: relevantTeachers, totalYears, count: relevantTeachers.length };
  };
  const displayName = (child) => child.name || '[Child]';
  const priceInfo = getTotalPricing();
  const primaryPricing = getPricing(primaryChild);
  const teacherInfo = getTeacherInfo(primaryChild);
  const copyLeadInfo = async () => {
    const childrenInfo = children.map((c, i) => {
      const label = i === 0 ? 'Child' : `Sibling ${i}`;
      return `${label}: ${c.name || '-'} | ${c.yearGroup || '-'} | ${c.subjects.join(', ') || '-'}`;
    }).join('\n');
    const info = `LEAD INFO
=========
${isPro ? '⭐ PRO\n' : ''}${childrenInfo}
Pain: ${painPoints || '-'}
Goal: ${desiredOutcome || '-'}
Tried: ${pastAttempts || '-'}
${additionalNotes ? `\nNotes: ${additionalNotes}` : ''}`;
    try {
      await navigator.clipboard.writeText(info);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = info;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        console.error('Copy failed', e);
      }
      document.body.removeChild(textArea);
    }
  };
  const objections = [
    { id: 'think', label: 'Need to think' }, { id: 'spouse', label: 'Talk to spouse' }, { id: 'expensive', label: 'Too expensive' },
    { id: 'burned', label: 'Burned before' }, { id: 'onetoone', label: 'Want 1-to-1' }, { id: 'times', label: 'Times don\'t work' },
    { id: 'later', label: 'Start later' }, { id: 'quiet', label: 'Gone quiet' },
  ];
  const inputStyle = { width: '100%', padding: '8px 10px', border: '1px solid #ddd', fontSize: '13px', fontFamily: 'Inter, sans-serif', marginBottom: '8px', boxSizing: 'border-box', background: colors.white, borderRadius: 0 };
  const smallBtnStyle = (active) => ({ padding: '4px 8px', border: 'none', background: active ? colors.primary : '#e8e8e8', color: active ? colors.white : colors.dark, cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: '500', fontSize: '10px', marginRight: '4px', marginBottom: '4px', borderRadius: 0 });
  const sectionHeaderStyle = { background: colors.primary, color: colors.white, padding: '16px 20px', marginBottom: '16px', borderRadius: 0 };
  const scriptBoxStyle = { background: colors.white, padding: '16px 20px', marginBottom: '12px', borderRadius: 0, border: '1px solid #e0e0e0' };
  const tipBoxStyle = { background: colors.lightBlue, padding: '12px 16px', marginBottom: '12px', borderRadius: 0, fontSize: '13px', fontFamily: 'Inter, sans-serif' };
  const warningBoxStyle = { background: '#fff3e0', padding: '12px 16px', marginBottom: '12px', borderRadius: 0, fontSize: '13px', fontFamily: 'Inter, sans-serif', borderLeft: `4px solid ${colors.warning}` };
  const listenForStyle = { background: '#e8f5e9', padding: '12px 16px', marginBottom: '12px', borderRadius: 0, fontSize: '13px', fontFamily: 'Inter, sans-serif', borderLeft: `4px solid ${colors.success}` };
  const labelStyle = { fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: colors.primary, marginBottom: '8px', display: 'block', letterSpacing: '0.5px', fontFamily: 'Inter, sans-serif' };
  const sidebarLabelStyle = { fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', color: colors.darkGray, marginBottom: '4px', marginTop: '12px', display: 'block', letterSpacing: '0.5px', fontFamily: 'Inter, sans-serif' };
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: colors.gray, minHeight: '100vh' }}>
      {/* Header — sticky */}
      <div style={{ background: colors.dark, padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <h1 style={{ margin: 0, color: colors.white, fontSize: '15px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>MyEdSpace</h1>
          <div style={{ display: 'flex', background: '#2a2a3e', borderRadius: 0 }}>
            <button onClick={() => setViewMode('sales')} style={{ padding: '5px 14px', background: viewMode === 'sales' ? colors.primary : 'transparent', color: viewMode === 'sales' ? colors.white : '#aaa', border: 'none', fontSize: '11px', fontWeight: '700', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>SALES CALL</button>
            <button onClick={() => setViewMode('trial')} style={{ padding: '5px 14px', background: viewMode === 'trial' ? colors.success : 'transparent', color: viewMode === 'trial' ? colors.white : '#aaa', border: 'none', fontSize: '11px', fontWeight: '700', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>TRIAL CONVERSION</button>
          </div>
          {viewMode === 'sales' && <button onClick={clearAll} style={{ padding: '4px 10px', background: 'transparent', color: '#888', border: '1px solid #555', fontSize: '10px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>⟲ CLEAR</button>}
        </div>
        {viewMode === 'sales' && <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setIsPro(!isPro)} style={{ padding: '5px 12px', background: isPro ? colors.pro : 'transparent', color: isPro ? colors.white : '#ccc', border: `1px solid ${isPro ? colors.pro : '#555'}`, fontSize: '11px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>{isPro ? '⭐ PRO' : 'STANDARD'}</button>
          <button onClick={() => setShowSalesPricing(!showSalesPricing)} style={{ padding: '5px 12px', background: showSalesPricing ? colors.primary : 'transparent', color: showSalesPricing ? colors.white : '#ccc', border: `1px solid ${showSalesPricing ? colors.primary : '#555'}`, fontSize: '11px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>PRICING</button>
          <button onClick={() => { setCurrentStep('objections'); setShowSalesPricing(false); }} style={{ padding: '5px 12px', background: colors.warning, color: colors.white, border: 'none', fontSize: '11px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>OBJECTIONS</button>
        </div>}
        {viewMode === 'trial' && <div style={{ display: 'flex', gap: '8px', position: 'relative' }}>
          <button onClick={() => { setShowTrialPricing(!showTrialPricing); setShowTrialObjections(false); }} style={{ padding: '5px 12px', background: showTrialPricing ? colors.success : 'transparent', color: showTrialPricing ? colors.white : '#ccc', border: `1px solid ${showTrialPricing ? colors.success : '#555'}`, fontSize: '11px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>PRICING</button>
          <button onClick={() => { setShowTrialObjections(!showTrialObjections); setShowTrialPricing(false); }} style={{ padding: '5px 12px', background: colors.warning, color: colors.white, border: showTrialObjections ? '2px solid #fff' : 'none', fontSize: '11px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>OBJECTIONS</button>
          {showTrialPricing && <div style={{ position: 'absolute', top: '36px', right: '0', width: '280px', background: colors.white, border: '1px solid #e0e0e0', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 200, fontFamily: 'Inter, sans-serif' }}>
            <div style={{ background: colors.dark, padding: '10px 14px' }}>
              <p style={{ margin: 0, fontSize: '11px', fontWeight: '700', color: colors.white, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Pricing Reference</p>
              <p style={{ margin: '2px 0 0 0', fontSize: '10px', color: '#aaa' }}>Ultimate Pass</p>
            </div>
            <div style={{ background: colors.accent, padding: '10px 14px', borderBottom: '1px solid #e0e0e0' }}>
              <p style={{ margin: 0, fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', color: colors.dark }}>Annual Upfront — lead with this</p>
              <p style={{ margin: '2px 0 0 0', fontSize: '20px', fontWeight: '800', color: colors.dark }}>£749.55</p>
              <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: colors.darkGray }}>or 3 x £263 instalments</p>
            </div>
            <div style={{ padding: '8px 14px', borderBottom: '1px solid #f0f0f0' }}>
              <p style={{ margin: 0, fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', color: colors.darkGray }}>3x Instalments</p>
              <p style={{ margin: '2px 0 0 0', fontSize: '15px', fontWeight: '700' }}>£263 x 3</p>
            </div>
            <div style={{ padding: '8px 14px', borderBottom: '1px solid #f0f0f0' }}>
              <p style={{ margin: 0, fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', color: colors.darkGray }}>Monthly — last resort</p>
              <p style={{ margin: '2px 0 0 0', fontSize: '15px', fontWeight: '700' }}>£180/mo <span style={{ fontSize: '10px', fontWeight: '400', color: colors.darkGray }}>cancel anytime</span></p>
            </div>
            <div style={{ background: '#e8f5e9', padding: '8px 14px', fontSize: '11px', fontWeight: '600', color: colors.success }}>14-day money-back guarantee</div>
            <div style={{ background: '#fff3e0', padding: '8px 14px', fontSize: '10px', color: colors.warning }}><strong>Single subject:</strong> TBC</div>
          </div>}
        </div>}
      </div>
      {viewMode === 'sales' && <>
      {/* Navigation */}
      <div style={{ background: colors.primary, display: 'flex' }}>
        {steps.slice(0, -1).map((step) => (
          <button key={step.id} onClick={() => { setCurrentStep(step.id); setActiveObjection(null); setShowSalesPricing(false); }} style={{ flex: 1, padding: '11px 8px', border: 'none', background: currentStep === step.id ? colors.accent : 'transparent', color: currentStep === step.id ? colors.dark : 'rgba(255,255,255,0.85)', cursor: 'pointer', fontSize: '12px', fontWeight: '600', fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>{step.label}</button>
        ))}
      </div>
      {/* Collapsible Pricing Reference Panel */}
      {showSalesPricing && (() => {
        const yg = primaryChild.yearGroup || 'Year 7';
        const ygMulti = primaryChild.yearGroup || 'Year 10';
        const tiers = [
          { label: '1 Subject', short: '1 Subject', tier: 1, count: 1 },
          { label: '2 Subjects', short: '2 Subjects', tier: 2, count: 2 },
          { label: 'Ultimate Pass', short: 'Ultimate Pass', tier: 'ultimate', count: 3 }
        ];
        const thStyle = { textAlign: 'center', padding: '8px 10px', fontSize: '11px', fontWeight: '800', color: colors.white, background: colors.primary, letterSpacing: '0.5px' };
        const tdLabel = { padding: '6px 10px', fontWeight: '600', fontSize: '12px', color: colors.dark, whiteSpace: 'nowrap' };
        const tdVal = { padding: '6px 10px', textAlign: 'center', fontSize: '12px', fontWeight: '600' };
        const sectionRow = (label, bg) => (
          <tr><td colSpan={4} style={{ padding: '8px 10px', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: colors.primary, background: bg || '#f0f4ff', borderTop: '2px solid #e0e0e0' }}>{label}</td></tr>
        );
        return (
        <div style={{ background: '#f0f4ff', borderBottom: `3px solid ${colors.primary}`, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '14px 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', color: colors.primary, fontFamily: 'Inter, sans-serif' }}>
                Pricing Reference {isPro && <span style={{ color: colors.pro }}>— PRO</span>}
                <span style={{ fontSize: '10px', fontWeight: '500', color: colors.darkGray, textTransform: 'none', marginLeft: '10px' }}>Based on {primaryChild.yearGroup || 'Year 7/10'} lesson counts</span>
              </span>
              <button onClick={() => setShowSalesPricing(false)} style={{ padding: '2px 8px', background: 'transparent', border: '1px solid #ccc', color: colors.darkGray, fontSize: '10px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>CLOSE</button>
            </div>
            <div style={{ background: colors.white, border: '1px solid #e0e0e0', overflow: 'hidden' }}>
              <table style={{ width: '100%', fontSize: '12px', fontFamily: 'Inter, sans-serif', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ ...thStyle, background: colors.dark, textAlign: 'left', width: '35%' }}></th>
                    {tiers.map(t => (
                      <th key={t.tier} style={{ ...thStyle, width: '21.66%' }}>{t.short}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sectionRow('Current Year — Annual')}
                  <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={tdLabel}>Annual Price</td>
                    {tiers.map(t => <td key={t.tier} style={{ ...tdVal, fontWeight: '800', fontSize: '13px' }}>£{pricing.currentYear[t.tier].annual}</td>)}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f0f0f0', background: '#fafafa' }}>
                    <td style={tdLabel}><span style={{ color: colors.darkGray }}>Was</span></td>
                    {tiers.map(t => {
                      const orig = isPro ? getProOriginalPrice(yg, t.count, false) : getOriginalPrice(yg, t.count, false);
                      return <td key={t.tier} style={{ ...tdVal, color: colors.darkGray, textDecoration: 'line-through', fontWeight: '400' }}>£{orig}</td>;
                    })}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={tdLabel}><span style={{ color: colors.success }}>Saving</span></td>
                    {tiers.map(t => {
                      const orig = isPro ? getProOriginalPrice(yg, t.count, false) : getOriginalPrice(yg, t.count, false);
                      return <td key={t.tier} style={{ ...tdVal, color: colors.success }}>£{(orig - pricing.currentYear[t.tier].annual).toFixed(0)}</td>;
                    })}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f0f0f0', background: '#fafafa' }}>
                    <td style={tdLabel}><span style={{ color: colors.primary }}>Per Lesson</span></td>
                    {tiers.map(t => {
                      const lessons = getLessonsForYearGroup(yg, t.count, false);
                      return <td key={t.tier} style={{ ...tdVal, color: colors.primary }}>£{(pricing.currentYear[t.tier].annual / lessons).toFixed(2)}</td>;
                    })}
                  </tr>

                  {sectionRow('Multi-Year — Annual')}
                  <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={tdLabel}>Annual Price</td>
                    {tiers.map(t => <td key={t.tier} style={{ ...tdVal, fontWeight: '800', fontSize: '13px' }}>£{pricing.multiYear[t.tier].annual}</td>)}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f0f0f0', background: '#fafafa' }}>
                    <td style={tdLabel}><span style={{ color: colors.darkGray }}>Was</span></td>
                    {tiers.map(t => {
                      const orig = isPro ? getProOriginalPrice(ygMulti, t.count, true) : getOriginalPrice(ygMulti, t.count, true);
                      return <td key={t.tier} style={{ ...tdVal, color: colors.darkGray, textDecoration: 'line-through', fontWeight: '400' }}>£{orig}</td>;
                    })}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={tdLabel}><span style={{ color: colors.success }}>Saving</span></td>
                    {tiers.map(t => {
                      const orig = isPro ? getProOriginalPrice(ygMulti, t.count, true) : getOriginalPrice(ygMulti, t.count, true);
                      return <td key={t.tier} style={{ ...tdVal, color: colors.success }}>£{(orig - pricing.multiYear[t.tier].annual).toFixed(0)}</td>;
                    })}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f0f0f0', background: '#fafafa' }}>
                    <td style={tdLabel}><span style={{ color: colors.primary }}>Per Lesson</span></td>
                    {tiers.map(t => {
                      const lessons = getLessonsForYearGroup(ygMulti, t.count, true);
                      return <td key={t.tier} style={{ ...tdVal, color: colors.primary }}>£{(pricing.multiYear[t.tier].annual / lessons).toFixed(2)}</td>;
                    })}
                  </tr>

                  {sectionRow('Payment Options')}
                  <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={tdLabel}>3x Instalments</td>
                    {tiers.map(t => <td key={t.tier} style={tdVal}>£{(pricing.currentYear[t.tier].annual / 3).toFixed(2)}</td>)}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f0f0f0', background: '#fafafa' }}>
                    <td style={tdLabel}>3x (Multi-Year)</td>
                    {tiers.map(t => <td key={t.tier} style={tdVal}>£{(pricing.multiYear[t.tier].annual / 3).toFixed(2)}</td>)}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={tdLabel}>6x (Multi-Year)</td>
                    {tiers.map(t => <td key={t.tier} style={tdVal}>£{(pricing.multiYear[t.tier].annual / 6).toFixed(2)}</td>)}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f0f0f0', background: '#e8f5e9' }}>
                    <td style={{ ...tdLabel, color: colors.success }}>Upfront (5% off)</td>
                    {tiers.map(t => <td key={t.tier} style={{ ...tdVal, color: colors.success, fontWeight: '700' }}>£{(pricing.currentYear[t.tier].annual * 0.95).toFixed(2)}</td>)}
                  </tr>
                  <tr style={{ background: '#e8f5e9' }}>
                    <td style={{ ...tdLabel, color: colors.success }}>Upfront Multi-Yr</td>
                    {tiers.map(t => <td key={t.tier} style={{ ...tdVal, color: colors.success, fontWeight: '700' }}>£{(pricing.multiYear[t.tier].annual * 0.95).toFixed(2)}</td>)}
                  </tr>

                  {sectionRow('Monthly (Cancel Anytime)')}
                  <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={tdLabel}>Per Month</td>
                    {tiers.map(t => <td key={t.tier} style={{ ...tdVal, fontWeight: '800', fontSize: '13px' }}>£{pricing.monthly[t.tier]}</td>)}
                  </tr>
                  <tr>
                    <td style={{ ...tdLabel, color: colors.darkGray, fontWeight: '400' }}>Annual Equiv.</td>
                    {tiers.map(t => <td key={t.tier} style={{ ...tdVal, color: colors.darkGray, fontWeight: '400' }}>£{(pricing.monthly[t.tier] * 12).toLocaleString()}</td>)}
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
              <div style={{ flex: 1, padding: '6px 10px', background: '#e8f5e9', fontSize: '10px', color: colors.success, fontWeight: '600', textAlign: 'center' }}>14-day money-back guarantee on all plans</div>
              <div style={{ flex: 1, padding: '6px 10px', background: '#fff3e0', fontSize: '10px', color: colors.warning, fontWeight: '600', textAlign: 'center' }}>Monthly does NOT include Easter Revision or Cram Course</div>
              <div style={{ flex: 1, padding: '6px 10px', background: '#f0f4ff', fontSize: '10px', color: colors.primary, fontWeight: '600', textAlign: 'center' }}>20% sibling discount on additional children</div>
            </div>
          </div>
        </div>);
      })()}
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 88px)' }}>
        {/* Left Sidebar */}
        <div style={{ width: '220px', background: colors.white, borderRight: '1px solid #e0e0e0', padding: '14px', overflowY: 'auto', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
          <span style={{ ...sidebarLabelStyle, color: colors.primary, marginTop: 0 }}>STUDENT</span>
          <input type="text" value={primaryChild.name} onChange={(e) => updateChild(0, 'name', e.target.value)} placeholder="Child's name..." style={inputStyle} />
          <select value={primaryChild.yearGroup} onChange={(e) => updateChild(0, 'yearGroup', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
            <option value="">Select year...</option>
            {yearGroups.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          {primaryChild.yearGroup && primaryChild.yearGroup !== 'Other' && (
            <>
              <span style={{ ...sidebarLabelStyle, marginTop: '8px' }}>SUBJECTS</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
                {subjectsByYear[primaryChild.yearGroup]?.map(subj => (<button key={subj} onClick={() => toggleSubject(0, subj)} style={smallBtnStyle(primaryChild.subjects.includes(subj))}>{subj}</button>))}
                <button
                  onClick={() => {
                    const allSubjects = subjectsByYear[primaryChild.yearGroup] || [];
                    const allSelected = allSubjects.every(s => primaryChild.subjects.includes(s));
                    updateChild(0, 'subjects', allSelected ? [] : [...allSubjects]);
                  }}
                  style={{
                    ...smallBtnStyle(subjectsByYear[primaryChild.yearGroup]?.every(s => primaryChild.subjects.includes(s))),
                    background: subjectsByYear[primaryChild.yearGroup]?.every(s => primaryChild.subjects.includes(s)) ? colors.pro : '#f3e8ff',
                    color: subjectsByYear[primaryChild.yearGroup]?.every(s => primaryChild.subjects.includes(s)) ? colors.white : colors.pro,
                    fontWeight: '700'
                  }}
                >
                  Ultimate
                </button>
              </div>
            </>
          )}
          <button onClick={addSibling} style={{ width: '100%', padding: '8px', background: colors.gray, border: '1px dashed #ccc', color: colors.darkGray, cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: '500', fontSize: '11px', marginTop: '12px', marginBottom: '12px', borderRadius: 0 }}>+ Add Sibling (20% off)</button>
          {hasSiblings && children.slice(1).map((child, idx) => (
            <div key={idx + 1} style={{ marginBottom: '12px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ ...sidebarLabelStyle, color: colors.primary, marginTop: 0 }}>SIBLING {idx + 1}</span>
                <button onClick={() => removeSibling(idx + 1)} style={{ background: 'none', border: 'none', color: colors.warning, cursor: 'pointer', fontSize: '14px', fontWeight: '700' }}>×</button>
              </div>
              <input type="text" value={child.name} onChange={(e) => updateChild(idx + 1, 'name', e.target.value)} placeholder="Name..." style={{ ...inputStyle, padding: '6px 8px' }} />
              <select value={child.yearGroup} onChange={(e) => updateChild(idx + 1, 'yearGroup', e.target.value)} style={{ ...inputStyle, padding: '6px 8px', cursor: 'pointer' }}>
                <option value="">Year...</option>
                {yearGroups.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              {child.yearGroup && child.yearGroup !== 'Other' && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
                  {subjectsByYear[child.yearGroup]?.map(subj => (<button key={subj} onClick={() => toggleSubject(idx + 1, subj)} style={smallBtnStyle(child.subjects.includes(subj))}>{subj}</button>))}
                </div>
              )}
            </div>
          ))}
          <div style={{ borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '4px' }}>
            <span style={{ ...sidebarLabelStyle, color: colors.primary }}>DISCOVERY</span>
            <span style={sidebarLabelStyle}>PAIN POINTS</span>
            <textarea value={painPoints} onChange={(e) => setPainPoints(e.target.value)} placeholder="Their exact words..." style={{ ...inputStyle, minHeight: '36px', resize: 'vertical' }} />
            <span style={sidebarLabelStyle}>GOAL</span>
            <textarea value={desiredOutcome} onChange={(e) => setDesiredOutcome(e.target.value)} placeholder="What success looks like..." style={{ ...inputStyle, minHeight: '36px', resize: 'vertical' }} />
            <span style={sidebarLabelStyle}>PRIOR ATTEMPTS</span>
            <textarea value={pastAttempts} onChange={(e) => setPastAttempts(e.target.value)} placeholder="What they've tried..." style={{ ...inputStyle, minHeight: '36px', resize: 'vertical' }} />
            <span style={sidebarLabelStyle}>ADDITIONAL NOTES</span>
            <textarea value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)} placeholder="Anything else relevant..." style={{ ...inputStyle, minHeight: '50px', resize: 'vertical' }} />
          </div>
          {primaryChild.subjects.length > 0 && (
            <div style={{ background: isPro ? '#f3e8ff' : colors.lightBlue, padding: '10px', borderRadius: 0, marginTop: '12px' }}>
              <span style={{ ...sidebarLabelStyle, color: isPro ? colors.pro : colors.primary, marginTop: 0 }}>PRICING {isPro && '(PRO)'}</span>
              <p style={{ margin: '4px 0', fontSize: '18px', fontWeight: '700', color: colors.dark }}>£{hasSiblings ? priceInfo.total?.toFixed(2) : primaryPricing.annual}</p>
              <p style={{ margin: '2px 0', fontSize: '10px', color: colors.darkGray }}>3x £{hasSiblings ? priceInfo.instalments3 : primaryPricing.instalments3} instalments</p>
              <p style={{ margin: '4px 0', fontSize: '11px', color: colors.success, fontWeight: '600' }}>Upfront (5% off): £{hasSiblings ? priceInfo.upfront : primaryPricing.upfront}</p>
              <p style={{ margin: '4px 0', fontSize: '11px', color: colors.darkGray }}>£{primaryPricing.pricePerHour}/lesson vs £50 tutor</p>
              <p style={{ margin: '2px 0', fontSize: '10px', color: colors.darkGray }}>Monthly: £{primaryPricing.monthly}/mo</p>
            </div>
          )}
          <button onClick={copyLeadInfo} style={{ width: '100%', padding: '10px', background: colors.accent, border: 'none', color: colors.dark, cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '11px', marginTop: '12px', borderRadius: 0 }}>{copied ? '✓ COPIED' : '📋 COPY NOTES'}</button>
        </div>
        {/* Main Content */}
        <div style={{ flex: 1, background: colors.gray, padding: '20px 24px', overflowY: 'auto' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {currentStep === 'open' && (<>
            <div style={sectionHeaderStyle}><h2 style={{ margin: 0, fontSize: '22px', fontWeight: '800' }}>OPEN</h2><p style={{ margin: '4px 0 0 0', fontSize: '13px', opacity: 0.85 }}>Proof-Promise-Plan (30-60 sec)</p></div>
            <div style={tipBoxStyle}><strong>🎯 GOAL:</strong> Set the frame and get permission to proceed.</div>
            <div style={scriptBoxStyle}><span style={labelStyle}>Greeting + Recording</span><p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>"Hi there - am I speaking with [Parent]? ... Thanks so much for booking in a consultation with me, really excited to help your {childOrChildren()} achieve {hasSiblings ? 'their' : '[their]'} goals.<br /><br />Just to let you know, this call is recorded for training purposes. Is that okay?"</p></div>
            <div style={{ ...tipBoxStyle, background: colors.accent }}><strong>💡 Wait for "yes" before continuing</strong></div>
            <div style={scriptBoxStyle}><span style={labelStyle}>Proof-Promise-Plan</span><p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>"Brilliant. So just a quick background - we've helped over 21,000 students across the UK improve their grades and confidence.<br /><br />On this call, I'd love to understand what's going on with your {childOrChildren()} that made you reach out, show you how we might be able to help, and see if it's a good fit. Should only take about 10 minutes. How does that sound?"</p></div>
            <div style={{ ...tipBoxStyle, background: colors.accent }}><strong>✓ Get "sounds good" before proceeding</strong></div>
          </>)}
          {currentStep === 'clarify' && (<>
            <div style={sectionHeaderStyle}><h2 style={{ margin: 0, fontSize: '22px', fontWeight: '800' }}>CLARIFY</h2><p style={{ margin: '4px 0 0 0', fontSize: '13px', opacity: 0.85 }}>Understand the Situation (2-3 min)</p></div>
            <div style={tipBoxStyle}><strong>🎯 GOAL:</strong> Get names, year groups, and subjects.</div>
            <div style={scriptBoxStyle}><span style={labelStyle}>Get Child's Name</span><p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>"So first things first - who's the lucky one we're helping today? What's your child's name?"</p></div>
            <div style={scriptBoxStyle}><span style={labelStyle}>Siblings Check</span><p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>"And do you have any other children who might benefit from some support too?"</p></div>
            {hasSiblings && <div style={{ ...tipBoxStyle, background: colors.accent }}><strong>👨‍👩‍👧‍👦 Siblings added!</strong> 20% off less expensive package.</div>}
            <div style={scriptBoxStyle}><span style={labelStyle}>Confirm Year Group{hasSiblings ? 's' : ''}</span><p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>{hasSiblings ? `"Great. What year is ${displayName(children[0])} in? And ${displayName(children[1])}?"` : `"Great. What year is ${displayName(primaryChild)} in?"`}</p></div>
            {primaryChild.yearGroup && primaryChild.yearGroup !== 'Other' && (<div style={scriptBoxStyle}><span style={labelStyle}>Subject Selection</span><p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>"Perfect. For {primaryChild.yearGroup}, we offer <strong>{subjectsByYear[primaryChild.yearGroup]?.join(', ')}</strong>. Which of these - if not all - are you interested in for {displayName(primaryChild)}?"</p></div>)}
          </>)}
          {currentStep === 'zombies' && (<>
            <div style={{ ...sectionHeaderStyle, background: colors.warning }}><h2 style={{ margin: 0, fontSize: '22px', fontWeight: '800' }}>KILL ZOMBIES</h2><p style={{ margin: '4px 0 0 0', fontSize: '13px', opacity: 0.85 }}>Prevent "need to talk to spouse" at close</p></div>
            <div style={tipBoxStyle}><strong>🎯 GOAL:</strong> Identify decision makers NOW so they don't become objections later.</div>

            <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.warning}` }}>
              <span style={{ ...labelStyle, color: colors.warning }}>DECISION MAKER QUESTION</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Before I tell you more - other parents sometimes make the mistake of waiting until the end of the call and then having to get their partner to hear everything again. So just want to check: is it only you that needs to hear this, or should we get someone else involved upfront?"
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
              <div style={{ flex: 1, background: colors.accent, padding: '16px', border: `2px solid ${colors.dark}` }}>
                <span style={{ ...labelStyle, color: colors.dark }}>IF "JUST ME":</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "Perfect. And is {displayName(primaryChild)} on board with getting some help, or is this a surprise?"
                </p>
                <br />
                <strong style={{ fontSize: '13px' }}>If kid isn't on board:</strong>
                <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: '1.7', fontStyle: 'italic' }}>
                  "Got it. That's actually pretty common. Most kids who resist at first have had bad experiences with boring tutoring. Our teachers are different - I'll explain why in a sec. And we have a 14-day money-back guarantee, so if {displayName(primaryChild)} genuinely doesn't take to it, you're fully covered."
                </p>
              </div>
              <div style={{ flex: 1, background: colors.lightBlue, padding: '16px', border: `2px solid ${colors.dark}` }}>
                <span style={{ ...labelStyle, color: colors.dark }}>IF SPOUSE NEEDED:</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "Are they around now? I can answer their questions directly."
                </p>
                <br />
                <strong style={{ fontSize: '13px' }}>If not around:</strong>
                <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: '1.7', fontStyle: 'italic' }}>
                  "No problem. We have a 14-day money-back guarantee, so they can see it in action before you're committed to anything."
                </p>
              </div>
            </div>
            <div style={{ ...warningBoxStyle, background: '#ffebee', borderLeft: '4px solid #e53935', marginTop: '16px' }}>
              <strong>⚠️ This prevents "need to talk to spouse" at close</strong>
            </div>
          </>)}
          {currentStep === 'label' && (<>
            <div style={sectionHeaderStyle}><h2 style={{ margin: 0, fontSize: '22px', fontWeight: '800' }}>LABEL</h2><p style={{ margin: '4px 0 0 0', fontSize: '13px', opacity: 0.85 }}>Confirm Understanding (30 sec)</p></div>
            <div style={tipBoxStyle}><strong>🎯 GOAL:</strong> Name their problem back to them. They must hear it and agree.</div>

            <div style={scriptBoxStyle}>
              <span style={labelStyle}>Transition Into Discovery</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Okay, amazing. So that I can give you the most tailored advice for {displayName(primaryChild)}, can I ask you a few questions about what's been going on?"
              </p>
            </div>
            <div style={{ ...tipBoxStyle, background: colors.accent }}><strong>✓ Wait for "yes" / "of course" before asking questions</strong></div>

            <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.primary}` }}>
              <span style={{ ...labelStyle, color: colors.primary }}>DISCOVERY Q1 - THE PROBLEM</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "So tell me, what's been going on with {displayName(primaryChild)}'s education that made you reach out to us?"
              </p>
            </div>
            <div style={{ background: '#fff9c4', padding: '14px 16px', marginBottom: '12px', border: `2px solid ${colors.dark}` }}>
              <strong>👊 EMPATHY CHECK - Do this EVERY time:</strong>
              <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: '1.8' }}>
                1. <strong>REPEAT</strong> their problem back: <em>"So {displayName(primaryChild)} is struggling with..."</em><br />
                2. <strong>ACKNOWLEDGE</strong> it: <em>"That must be really frustrating..."</em><br />
                3. <strong>ASSOCIATE</strong>: <em>"We hear this a lot from parents, you're definitely not alone."</em>
              </p>
            </div>
            <div style={{ fontSize: '12px', color: colors.primary, fontWeight: '600', marginBottom: '12px' }}>💡 Capture in sidebar → Pain Points</div>
            <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.accent}` }}>
              <span style={{ ...labelStyle, color: colors.dark }}>DISCOVERY Q2 - SUCCESS VISION</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "And what would success look like for {displayName(primaryChild)} by the end of this school year?"
              </p>
            </div>
            <div style={{ fontSize: '12px', color: colors.primary, fontWeight: '600', marginBottom: '12px' }}>💡 Capture in sidebar → Goal</div>
            <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.warning}` }}>
              <span style={{ ...labelStyle, color: colors.warning }}>DISCOVERY Q3 - URGENCY</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "What made you reach out now, versus a few months ago?"
              </p>
            </div>
            <div style={{ fontSize: '12px', color: colors.primary, fontWeight: '600', marginBottom: '12px' }}>💡 Capture in sidebar → Additional Notes (urgency)</div>
            <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.primary}` }}>
              <span style={{ ...labelStyle, color: colors.primary }}>NAME IT BACK</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Okay, so let me make sure I've got this right. {displayName(primaryChild)} is in {effectiveYearGroup(primaryChild) || '[Year]'} taking {primaryChild.subjects.join(' and ') || '[Subject]'}. The main challenge is {painPoints || '[their specific pain - use their words]'}. And what you really want is {desiredOutcome || '[their stated goal]'}. Is that right?"
              </p>
            </div>
            <div style={{ ...tipBoxStyle, background: colors.accent }}><strong>✓ Wait for "Yes, exactly" before proceeding</strong></div>
          </>)}
          {currentStep === 'overview' && (<>
            <div style={sectionHeaderStyle}><h2 style={{ margin: 0, fontSize: '22px', fontWeight: '800' }}>PAIN CYCLE</h2><p style={{ margin: '4px 0 0 0', fontSize: '13px', opacity: 0.85 }}>Past Attempts + Consequences (2-3 min)</p></div>
            <div style={warningBoxStyle}><strong>⚠️ Most important phase.</strong> People don't buy without pain. Surface it, don't create it.</div>
            <div style={scriptBoxStyle}><span style={labelStyle}>Past Attempts</span><p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>{hasSiblings ? `"Before reaching out to us, what have you tried so far to help ${allChildNames()}?"` : `"Before reaching out to us, what have you tried so far to help ${displayName(primaryChild)}?"`}</p></div>
            <div style={listenForStyle}><strong>👂 Listen for:</strong> Private tutors, YouTube, extra homework, Kumon, school support, nothing yet</div>
            <div style={scriptBoxStyle}><span style={labelStyle}>Follow The Pain</span><p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>"And how did that go?"<br /><br /><span style={{ color: colors.darkGray }}>[Let them answer]</span><br /><br />"Okay. And what else have you tried?"<br /><br /><span style={{ color: colors.darkGray }}>[Repeat until exhausted]</span></p></div>
            <div style={scriptBoxStyle}><span style={labelStyle}>Consequences</span><p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>"So you've tried {pastAttempts || '[their attempts]'}, and none of it has quite worked. How long has this been going on?"<br /><br />"And if things stay the way they are - what does that mean for {displayName(primaryChild)} by {isExamYear(primaryChild.yearGroup) ? 'exam time' : 'the end of the year'}?"</p></div>
            <div style={warningBoxStyle}><strong>🔇 Let the silence sit.</strong> Don't rush to fill it.</div>
            <div style={scriptBoxStyle}><span style={labelStyle}>Transition</span><p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>"That's really helpful, thank you. Can I tell you a bit about how we might be able to help?"</p></div>
          </>)}
          {currentStep === 'sell' && (<>
            <div style={sectionHeaderStyle}><h2 style={{ margin: 0, fontSize: '22px', fontWeight: '800' }}>SELL THE VACATION</h2><p style={{ margin: '4px 0 0 0', fontSize: '13px', opacity: 0.85 }}>What They Get (2-3 min)</p></div>
            <div style={tipBoxStyle}><strong>🎯 GOAL:</strong> Sell the outcome AND set clear expectations.</div>
            <div style={warningBoxStyle}><strong>⚠️ Don't just read the script.</strong> Use it as a base, but tailor it to this lead. Connect the key features back to {painPoints ? <><strong>"{painPoints}"</strong> — their words</> : 'their specific pain points (capture them in the sidebar)'}. The parent should feel like this presentation was built for them.</div>

            {primaryChild.yearGroup && primaryChild.yearGroup !== 'Other' && (<div style={{ background: colors.white, padding: '12px 16px', marginBottom: '16px', borderRadius: 0, display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', border: '1px solid #e0e0e0' }}><span style={{ fontSize: '12px', fontWeight: '700' }}>📅</span>{timetableLinks[primaryChild.yearGroup] && <a href={timetableLinks[primaryChild.yearGroup]} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: colors.primary, fontWeight: '600', textDecoration: 'none' }}>{primaryChild.yearGroup} Timetable →</a>}{primaryChild.subjects.map(subj => (curriculumLinks[primaryChild.yearGroup]?.[subj] && <a key={subj} href={curriculumLinks[primaryChild.yearGroup][subj]} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: colors.primary, fontWeight: '600', textDecoration: 'none' }}>{subj} Curriculum →</a>))}</div>)}

            <div style={scriptBoxStyle}>
              <span style={labelStyle}>Bridge From Pain</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "So you mentioned {painPoints || '[their specific pain]'}. That's exactly what we help with."
              </p>
            </div>
            <div style={scriptBoxStyle}>
              <span style={labelStyle}>Teacher Credentials</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Let me tell you about who'll be teaching {displayName(primaryChild)}...
                <br /><br />
                {teacherInfo && teacherInfo.count <= 3 ? (
                  <>
                    The teacher{teacherInfo.count > 1 ? 's' : ''} for {primaryChild.subjects.join(' and ')} {teacherInfo.count > 1 ? 'are' : 'is'} in the <strong>top 1% of teachers in the country</strong>:
                    <br /><br />
                    {teacherInfo.teachers.map((t, i) => (<span key={i}>• <strong>{t.subject}:</strong> {t.name} - {t.credentials}<br /></span>))}
                    <br />
                    What students say makes them special is how they explain topics. They can take something confusing and just make it click."
                  </>
                ) : (
                  <>
                    Our teachers are in the <strong>top 1% in the country</strong> - combined {teacherInfo?.totalYears || '100'}+ years of teaching experience. What students say makes them special is how they explain topics. They can take something confusing and just make it click."
                  </>
                )}
              </p>
            </div>
            <div style={scriptBoxStyle}>
              <span style={labelStyle}>What Their Week Looks Like</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "So here's what {displayName(primaryChild)}'s week would actually look like...
                <br /><br />
                {displayName(primaryChild)} gets <strong>2 live lessons every week per subject</strong>. They follow along with a workbook we provide, so they can focus on listening instead of frantically copying notes.
                <br /><br />
                The teacher teaches live - it's interactive, not passive. Students ask questions in chat, work through problems together.
                <br /><br />
                On average, <strong>each student sends around 25 messages per lesson</strong> - that level of engagement is incomparable to a normal classroom.
                <br /><br />
                Does that make sense?"
              </p>
            </div>
            <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.primary}` }}>
              <span style={{ ...labelStyle, color: colors.primary }}>PRACTICE + VIDEO SOLUTIONS</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "And it doesn't stop when the lesson ends...
                <br /><br />
                Every week, there are practice problems that reinforce what was taught.
                <br /><br />
                And here's the key part - <strong>every single problem has a video solution</strong> where the teacher walks through it step by step.
                <br /><br />
                So if {displayName(primaryChild)} gets stuck at 9pm doing homework? They're not actually stuck. They watch the teacher solve it and understand the approach."
              </p>
            </div>
            <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.lightBlue}` }}>
              <span style={{ ...labelStyle, color: colors.primary }}>RECORDINGS</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Oh, and one more thing...
                <br /><br />
                <strong>Every lesson is recorded</strong> and available instantly.
                <br /><br />
                So if {displayName(primaryChild)} misses a class - football practice, family dinner, whatever - they just watch the recording. They don't fall behind.
                <br /><br />
                Some kids actually prefer the recordings because they can pause and rewatch the tricky parts.
                <br /><br />
                Sound good so far?"
              </p>
            </div>
            {isExamYear(primaryChild.yearGroup) && (
              <div style={scriptBoxStyle}>
                <span style={labelStyle}>Exam Year Bonus</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "And because {displayName(primaryChild)} is in {primaryChild.yearGroup}, the package includes our <strong>Easter Revision Course</strong> and <strong>Cram Course</strong> - led by actual examiners who know exactly what the markers are looking for."
                </p>
              </div>
            )}
            <div style={scriptBoxStyle}>
              <span style={labelStyle}>Outcome</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "So what does all this add up to?
                <br /><br />
                What parents tell us is homework goes from being a battle to something {displayName(primaryChild)} can actually get on with. The confidence starts to come back. And that understanding builds week by week.
                <br /><br />
                And that's why - {isGCSERange(primaryChild.yearGroup) ? (
                  <>last year, <strong>58% of our GCSE students achieved grades 7-9</strong> - more than double the national average.</>
                ) : (
                  <>on average, <strong>our students perform 3x better than national averages</strong>.</>
                )}"
              </p>
            </div>
            <div style={scriptBoxStyle}>
              <span style={labelStyle}>Guarantee + Proof</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Now, I know that all sounds great - but you're probably wondering if it'll actually work for {displayName(primaryChild)}.
                <br /><br />
                That's exactly why we have a <strong>14-day money-back guarantee</strong>. Two weeks to see if it clicks. If not, full refund, no hassle.
                <br /><br />
                But honestly? Most families don't need it. We have <strong>95% parent satisfaction</strong> and 1,700+ five-star reviews on Trustpilot.
                <br /><br />
                <strong>So - how does all of that sound so far?</strong>"
              </p>
            </div>
          </>)}
          {currentStep === 'close' && (<>
            <div style={sectionHeaderStyle}><h2 style={{ margin: 0, fontSize: '22px', fontWeight: '800' }}>CLOSE</h2><p style={{ margin: '4px 0 0 0', fontSize: '13px', opacity: 0.85 }}>Anchor → Value Stack → Ask</p></div>

            <div style={scriptBoxStyle}>
              <span style={labelStyle}>Price Anchor</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "So let me walk you through the investment. An average private tutor charges around £50 an hour. Two lessons a week{primaryPricing.subjectCount > 1 ? ` per subject - that's ${primaryPricing.subjectCount} subjects, so ${primaryPricing.subjectCount * 8} lessons a month` : ', that\'s 8 lessons a month'} - <strong>£{primaryPricing.subjectCount * 400} a month</strong> just for their time. No workbooks, no video solutions, no recordings."
              </p>
            </div>
            {isMultiYear(primaryChild.yearGroup) && (
              <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.primary}`, background: '#f0f4ff' }}>
                <span style={{ ...labelStyle, color: colors.primary }}>MULTI-YEAR RECOMMENDATION</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "Given {displayName(primaryChild)} is in {primaryChild.yearGroup}, I'd recommend our Multi-Year package. It's specifically designed to prepare them for {primaryChild.yearGroup === 'Year 10' ? 'GCSEs' : 'A-Levels'} next year - so they're not just learning, they're building towards the exams that actually matter.
                  <br /><br />
                  Here's what's included..."
                </p>
              </div>
            )}
            <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.accent}` }}>
              <span style={{ ...labelStyle, color: colors.dark }}>OUR PRICE {isPro && <span style={{ color: colors.pro }}>(PRO)</span>}</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                {teacherInfo && teacherInfo.count === 1 ? (
                  `"With us, you get ${teacherInfo.teachers[0].name} teaching ${displayName(primaryChild)} twice a week...`
                ) : (
                  `"With us, you get our top 1% teachers teaching ${displayName(primaryChild)} twice a week${primaryPricing.subjectCount > 1 ? ' per subject' : ''}...`
                )}
                <br />PLUS the workbooks so they can focus on learning...
                <br />PLUS homework after every lesson with full video solutions...
                <br />PLUS every lesson recorded to watch back anytime...
                {isMultiYear(primaryChild.yearGroup) && (
                  <>
                    <br />PLUS Summer School between {primaryChild.yearGroup === 'Year 10' ? 'Year 10 and 11' : 'Year 12 and 13'}...
                    <br />PLUS Easter Revision Course and Cram Course next year...
                  </>
                )}
                {isExamYear(primaryChild.yearGroup) && (
                  <>
                    <br />PLUS Easter Revision Course for {primaryChild.yearGroup === 'Year 11' ? 'GCSEs' : 'A-Levels'}...
                    <br />PLUS Cram Course right before the exams...
                  </>
                )}
                <br /><br />
                {hasSiblings ? (
                  <>
                    With {children.length} children, you get 20% sibling discount:
                    <br /><br />
                    {priceInfo.breakdown?.map((p, i) => (
                      <span key={i}><strong>{children[i].name || `Child ${i + 1}`}:</strong> £{p.finalPrice.toFixed(2)} {p.discounted && <span style={{ color: colors.success }}>(20% off)</span>}<br /></span>
                    ))}
                    <br />
                    Normally this would be <strong>£{(priceInfo.total / 0.665).toFixed(0)}</strong> for the full {isMultiYear(primaryChild.yearGroup) ? 'two-year ' : ''}course...
                    <br /><br />
                    But right now you're getting it for just <strong>£{priceInfo.total.toFixed(2)}</strong> - that's <strong>£{primaryPricing.pricePerHour} per lesson</strong> versus £50 for a tutor."
                  </>
                ) : (
                  <>
                    Normally this would be <strong>£{primaryPricing.original}</strong> for the full {isMultiYear(primaryChild.yearGroup) ? 'two-year ' : ''}course...
                    <br /><br />
                    But right now you're getting it for just <strong>£{primaryPricing.annual}</strong> - saving over £{primaryPricing.saving}.
                    <br /><br />
                    That works out to <strong>£{primaryPricing.pricePerHour} per lesson</strong> versus £50 for a tutor."
                  </>
                )}
              </p>
            </div>
            {isExamYear(primaryChild.yearGroup) && (
              <div style={{ ...tipBoxStyle, background: '#fff3e0' }}>
                <strong>📝 Note:</strong> Easter Revision + Cram Course are included with the full course, but NOT with monthly. Worth mentioning if they go monthly.
              </div>
            )}
            <div style={scriptBoxStyle}>
              <span style={labelStyle}>Guarantee</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "And remember - 14-day money-back guarantee. If it's not working, full refund, no questions asked."
              </p>
            </div>
            <div style={scriptBoxStyle}>
              <span style={labelStyle}>Ask (Assumptive Close)</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "The next class for {displayName(primaryChild)} is [tomorrow/next week].
                <br /><br /><strong>Should I get {hasSiblings ? allChildNames() : displayName(primaryChild)} set up so they can start this week?</strong>"
              </p>
            </div>
            <div style={{ ...warningBoxStyle, background: '#fff0f0', borderLeft: `4px solid #e53935` }}>
              <strong>⚠️ When they say YES → STOP TALKING. Don't keep selling.</strong>
              <br /><br />
              "Great, let me send you the link to get {displayName(primaryChild)} enrolled."
            </div>
            <div style={{ ...scriptBoxStyle, background: colors.accent, marginTop: '20px' }}>
              <span style={{ ...labelStyle, color: colors.dark }}>IF YES → PAYMENT OPTIONS (A/B Close)</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Perfect! Would you prefer to <strong>pay upfront and save an extra 5%</strong> - that's <strong>£{hasSiblings ? priceInfo.upfront : primaryPricing.upfront}</strong> - or <strong>split it into 3 monthly instalments</strong> of £{hasSiblings ? priceInfo.instalments3 : primaryPricing.instalments3}?"
              </p>
            </div>
            {isMultiYear(primaryChild.yearGroup) && (
              <div style={{ ...scriptBoxStyle, background: '#e3f2fd', marginTop: '20px', border: `2px solid ${colors.primary}` }}>
                <span style={{ ...labelStyle, color: colors.primary }}>IF HESITANT ABOUT MULTI-YEAR → CURRENT YEAR ONLY (Y10/Y12)</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "I understand - two years is a big commitment. We can also do <strong>just this year</strong> for <strong>£{(() => {
                    const currentYearPricing = isPro ? proPricing.currentYear : standardPricing.currentYear;
                    const subjectKey = primaryPricing.subjectCount === 1 ? 1 : primaryPricing.subjectCount === 2 ? 2 : 'ultimate';
                    return currentYearPricing[subjectKey]?.annual;
                  })()}</strong>. That way {displayName(primaryChild)} gets the support they need right now, and you can always extend to the multi-year later if you want to lock in the exam prep.
                  <br /><br />
                  Would that work better for you?"
                </p>
                <div style={{ marginTop: '12px', padding: '10px', background: colors.white, border: `1px solid ${colors.primary}` }}>
                  <p style={{ margin: 0, fontSize: '12px', fontWeight: '700', color: colors.primary }}>CURRENT YEAR PRICING ({primaryPricing.subjectCount} subject{primaryPricing.subjectCount > 1 ? 's' : ''}):</p>
                  <p style={{ margin: '6px 0 0 0', fontSize: '13px', lineHeight: '1.8' }}>
                    <strong>Total:</strong> £{(() => {
                      const currentYearPricing = isPro ? proPricing.currentYear : standardPricing.currentYear;
                      const subjectKey = primaryPricing.subjectCount === 1 ? 1 : primaryPricing.subjectCount === 2 ? 2 : 'ultimate';
                      return currentYearPricing[subjectKey]?.annual;
                    })()} <span style={{ color: colors.darkGray }}>(was £{(() => {
                      const subjectCount = primaryPricing.subjectCount;
                      return isPro ? getProOriginalPrice(primaryChild.yearGroup, subjectCount, false) : getOriginalPrice(primaryChild.yearGroup, subjectCount, false);
                    })()})</span>
                    <br />
                    <strong>3 instalments:</strong> £{(() => {
                      const currentYearPricing = isPro ? proPricing.currentYear : standardPricing.currentYear;
                      const subjectKey = primaryPricing.subjectCount === 1 ? 1 : primaryPricing.subjectCount === 2 ? 2 : 'ultimate';
                      return (currentYearPricing[subjectKey]?.annual / 3).toFixed(2);
                    })()} each
                    <br />
                    <strong style={{ color: colors.success }}>Upfront (5% off):</strong> £{(() => {
                      const currentYearPricing = isPro ? proPricing.currentYear : standardPricing.currentYear;
                      const subjectKey = primaryPricing.subjectCount === 1 ? 1 : primaryPricing.subjectCount === 2 ? 2 : 'ultimate';
                      return (currentYearPricing[subjectKey]?.annual * 0.95).toFixed(2);
                    })()}
                  </p>
                </div>
              </div>
            )}
            <div style={{ ...scriptBoxStyle, background: '#fafafa', marginTop: '20px' }}>
              <span style={{ ...labelStyle, color: colors.darkGray }}>IF HESITANT → MONTHLY DOWNSELL</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                {hasSiblings ? (
                  <>
                    "Or if you'd prefer flexibility, we have monthly options too - no lock-in, cancel anytime.
                    <br /><br />
                    That would be <strong>£{priceInfo.totalMonthly.toFixed(2)}/month total</strong> for all {children.length} children:
                    <br />
                    {priceInfo.monthlyBreakdown.map((child, i) => (
                      <span key={i}>
                        • {child.childName || `Child ${i + 1}`}: <strong>£{child.finalMonthly.toFixed(2)}/month</strong>{child.discounted && <em style={{ color: colors.success }}> (20% sibling discount)</em>}
                        <br />
                      </span>
                    ))}
                    {children.some(c => isExamYear(c.yearGroup)) && <><br /><em style={{ color: colors.warning }}>Note: Monthly doesn't include Easter Revision or Cram Course.</em></>}"
                  </>
                ) : (
                  <>
                    "Or if you'd prefer flexibility, we have monthly at <strong>£{primaryPricing.monthly}/month</strong> - no lock-in, cancel anytime.{isExamYear(primaryChild.yearGroup) && <><br /><br /><em style={{ color: colors.warning }}>Note: Monthly doesn't include Easter Revision or Cram Course.</em></>}"
                  </>
                )}
              </p>
            </div>
            <div style={{ ...scriptBoxStyle, background: '#fff8f0' }}>
              <span style={{ ...labelStyle, color: colors.warning }}>IF STILL HESITANT → £10 TRIAL</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Tell you what - try it for 10 days, just £10. Full access. No auto-renewal. Fair?"
              </p>
            </div>
            {isExamYear(primaryChild.yearGroup) && (
              <div style={{ ...scriptBoxStyle, background: '#e8f5e9', border: `2px solid ${colors.success}` }}>
                <span style={{ ...labelStyle, color: colors.success }}>IF STILL NO → EASTER REVISION COURSE (Y11/Y13 ONLY)</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "Okay, I hear you. One last thing - if the full course isn't right for now, we do have a standalone <strong>Easter Revision Course</strong> specifically for {primaryChild.yearGroup === 'Year 11' ? 'GCSE' : 'A-Level'} students.
                  <br /><br />
                  It's an intensive programme over the Easter holidays - focused entirely on exam prep with teachers who are actual examiners. A lot of families use it as a final push before the exams.
                  <br /><br />
                  Would that be something worth looking at instead?"
                </p>
              </div>
            )}
            {!isMultiYear(primaryChild.yearGroup) && !isExamYear(primaryChild.yearGroup) && primaryChild.yearGroup && primaryChild.yearGroup !== 'Other' && (
              <div style={{ ...scriptBoxStyle, background: '#f3e8ff', marginTop: '20px', border: `2px dashed ${colors.pro}` }}>
                <span style={{ ...labelStyle, color: colors.pro }}>📌 UPSELL OPTION: MULTI-YEAR PACKAGE</span>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.8', color: colors.darkGray }}>
                  <em>If the lead wants to secure long-term support or asks about continuing next year:</em>
                  <br /><br />
                  "We also have a Multi-Year package if you want to lock in support through to {['Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9'].includes(primaryChild.yearGroup) ? 'GCSEs' : 'A-Levels'}. It includes Summer School between years, plus Easter Revision and Cram Courses when they reach exam year. Happy to share the pricing if you're interested."
                </p>
                <div style={{ marginTop: '12px', padding: '10px', background: colors.white, border: `1px solid ${colors.pro}` }}>
                  <p style={{ margin: 0, fontSize: '12px', fontWeight: '700', color: colors.pro }}>MULTI-YEAR PRICING ({primaryPricing.subjectCount} subject{primaryPricing.subjectCount > 1 ? 's' : ''}):</p>
                  <p style={{ margin: '6px 0 0 0', fontSize: '13px', lineHeight: '1.8' }}>
                    <strong>Total:</strong> £{(() => {
                      const multiYearPricing = isPro ? proPricing.multiYear : standardPricing.multiYear;
                      const subjectKey = primaryPricing.subjectCount === 1 ? 1 : primaryPricing.subjectCount === 2 ? 2 : 'ultimate';
                      return multiYearPricing[subjectKey]?.annual;
                    })()} <span style={{ color: colors.darkGray }}>(was £{(() => {
                      const subjectCount = primaryPricing.subjectCount;
                      return isPro ? getProOriginalPrice(primaryChild.yearGroup, subjectCount, true) : getOriginalPrice(primaryChild.yearGroup, subjectCount, true);
                    })()})</span>
                    <br />
                    <strong>3 instalments:</strong> £{(() => {
                      const multiYearPricing = isPro ? proPricing.multiYear : standardPricing.multiYear;
                      const subjectKey = primaryPricing.subjectCount === 1 ? 1 : primaryPricing.subjectCount === 2 ? 2 : 'ultimate';
                      return (multiYearPricing[subjectKey]?.annual / 3).toFixed(2);
                    })()} each
                    <br />
                    <strong>6 instalments:</strong> £{(() => {
                      const multiYearPricing = isPro ? proPricing.multiYear : standardPricing.multiYear;
                      const subjectKey = primaryPricing.subjectCount === 1 ? 1 : primaryPricing.subjectCount === 2 ? 2 : 'ultimate';
                      return (multiYearPricing[subjectKey]?.annual / 6).toFixed(2);
                    })()} each
                    <br />
                    <strong style={{ color: colors.success }}>Upfront (5% off):</strong> £{(() => {
                      const multiYearPricing = isPro ? proPricing.multiYear : standardPricing.multiYear;
                      const subjectKey = primaryPricing.subjectCount === 1 ? 1 : primaryPricing.subjectCount === 2 ? 2 : 'ultimate';
                      return (multiYearPricing[subjectKey]?.annual * 0.95).toFixed(2);
                    })()}
                  </p>
                </div>
              </div>
            )}
            <div style={{ ...scriptBoxStyle, background: colors.lightBlue, marginTop: '20px' }}>
              <span style={{ ...labelStyle, color: colors.dark }}>⚡ POWER CLOSES (if stuck)</span>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: '2' }}>
                <strong>1.</strong> "What would make this a yes for you?"<br />
                <strong>2.</strong> "What's your main concern right now?"<br />
                <strong>3.</strong> "Scale of 1-10, how interested? What gets you to 10?"<br />
                <strong>4.</strong> "Best case: {hasSiblings ? 'the kids get' : `${displayName(primaryChild)} gets`} confident. Worst case: £10 trial. Which risk makes sense?"
              </p>
            </div>
          </>)}
          {currentStep === 'confirm' && (<>
            <div style={{ ...sectionHeaderStyle, background: colors.success }}><h2 style={{ margin: 0, fontSize: '22px', fontWeight: '800' }}>PAYMENT CONFIRMATION</h2><p style={{ margin: '4px 0 0 0', fontSize: '13px', opacity: 0.85 }}>Stay on the line</p></div>
            <div style={tipBoxStyle}><strong>🎯 GOAL:</strong> Confirm payment goes through. Welcome them properly.</div>

            <div style={{ ...warningBoxStyle, background: '#ffebee', borderLeft: '4px solid #e53935' }}>
              <strong>⚠️ Stay on the line until payment is confirmed. Don't hang up early.</strong>
            </div>
            <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.primary}` }}>
              <span style={{ ...labelStyle, color: colors.primary }}>SEND LINK</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Great choice. I'm sending you the registration link now - you should see it come through."
              </p>
            </div>
            <div style={scriptBoxStyle}>
              <span style={labelStyle}>WHILE THEY PAY</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "I'm happy to stay on the line while you register {displayName(primaryChild)} - it should only take 1 or 2 minutes and I can help answer any of your questions and confirm if we've received your payment. Sound good?"
              </p>
            </div>
            <div style={{ ...tipBoxStyle, background: colors.accent }}><strong>⏳ Wait for them to complete payment</strong></div>
            <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.success}` }}>
              <span style={{ ...labelStyle, color: colors.success }}>CONFIRM PAYMENT</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Perfect, I can see that's gone through. {displayName(primaryChild)} is all set!"
              </p>
            </div>
            <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.primary}` }}>
              <span style={{ ...labelStyle, color: colors.primary }}>NEXT STEPS</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Here's what happens next: you'll get an email to set up your parent account, and then {displayName(primaryChild)}'s student account. {displayName(primaryChild)}'s first class is [Day] at [Time]. Any questions before we wrap up?"
              </p>
            </div>
            <div style={{ ...scriptBoxStyle, background: '#e8f5e9', borderLeft: `4px solid ${colors.success}` }}>
              <span style={{ ...labelStyle, color: colors.success }}>FINAL SEND-OFF</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Great! Welcome to MyEdSpace. {displayName(primaryChild)} is going to do great. Talk soon!"
              </p>
            </div>
            <div style={{ ...tipBoxStyle, background: '#f5f5f5', marginTop: '20px' }}>
              <strong>📞 Customer Service:</strong> If they have issues with payment or need help after the call, they can reach us at <strong>+44 7897 016999</strong> or <strong>support@myedspace.co.uk</strong>
            </div>
          </>)}
          {currentStep === 'objections' && (<>
            <div style={{ ...sectionHeaderStyle, background: colors.warning }}><h2 style={{ margin: 0, fontSize: '22px', fontWeight: '800' }}>OBJECTION HANDLING</h2><p style={{ margin: '4px 0 0 0', fontSize: '13px', opacity: 0.9 }}>Acknowledge → Repeat → Handle → Close Again</p></div>

            <div style={tipBoxStyle}><strong>Rules:</strong> "I completely understand" first · Repeat their concern · Ask before telling · Once they say yes, STOP</div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {objections.map(obj => (<button key={obj.id} onClick={() => setActiveObjection(activeObjection === obj.id ? null : obj.id)} style={{ padding: '10px 16px', border: '1px solid #e0e0e0', background: activeObjection === obj.id ? colors.warning : colors.white, color: activeObjection === obj.id ? colors.white : colors.dark, cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '13px', borderRadius: 0 }}>{obj.label}</button>))}
              <button onClick={() => setShowAllObjections(!showAllObjections)} style={{ padding: '10px 16px', border: `2px solid ${colors.primary}`, background: showAllObjections ? colors.primary : 'transparent', color: showAllObjections ? colors.white : colors.primary, cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '13px', borderRadius: 0 }}>{showAllObjections ? 'Collapse' : 'Show All'}</button>
            </div>
            {(showAllObjections || activeObjection === 'think') && (
              <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.warning}`, marginBottom: '14px' }}>
                <span style={{ ...labelStyle, color: colors.warning }}>"I need to think about it"</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "I completely understand - it's an important decision. <strong>What would make this a yes for you?</strong>"
                  <br /><br />
                  <strong>If vague:</strong> "Tell you what - why don't we do the £10 trial? That way you can try it properly, see how {hasSiblings ? 'the kids respond' : `${displayName(primaryChild)} responds`}, and then decide. No commitment beyond the £10."
                  <br /><br />
                  <strong>If fit concern:</strong> "That's what the 14-day guarantee is for. Try everything - if it's not working, full refund."
                </p>
              </div>
            )}
            {(showAllObjections || activeObjection === 'spouse') && (
              <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.warning}`, marginBottom: '14px' }}>
                <span style={{ ...labelStyle, color: colors.warning }}>"I need to talk to my husband/wife"</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "Completely understand. <strong>If this was completely up to you, would you have any hesitation?</strong>"
                  <br /><br />
                  <strong>If no hesitation:</strong> "So you're sold - you just need them on board. What do you think they'd want to know?"
                  <br /><br />
                  <strong>If cost:</strong> "This is £{primaryPricing.monthly}/month versus £{primaryPricing.tutorCost} for tutoring. I can send all the details."
                  <br /><br />
                  <strong>If they want to wait:</strong> "No problem at all. Would it help if we <strong>scheduled a quick call when you're both available</strong>? That way I can answer any questions together and you can make a decision as a team."
                  <br /><br />
                  <strong>Better alternative:</strong> "Actually, here's a thought - rather than trying to explain it, why not let them see it? Start today with the 14-day guarantee, and in two weeks your partner can see exactly how {displayName(primaryChild)} is responding. Real results beat a sales pitch every time. And if it's not working for any reason, full refund anyway - so there's genuinely nothing to lose."
                </p>
              </div>
            )}
            {(showAllObjections || activeObjection === 'expensive') && (
              <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.warning}`, marginBottom: '14px' }}>
                <span style={{ ...labelStyle, color: colors.warning }}>"It's too expensive"</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "I completely understand - it's a real investment."
                  <br /><br />
                  <strong>Value reframe:</strong> "If you knew - really knew - that {hasSiblings ? allChildNames() : displayName(primaryChild)} would {desiredOutcome || 'get the outcomes you mentioned'}, would this price be worth it to you?"
                  <br /><br />
                  [If yes]: "Then it's not about the price - it's whether you believe it'll work. That's what the 14-day guarantee is for."
                  <br /><br />
                  <strong>Price per hour:</strong> "This works out to <strong>£{primaryPricing.pricePerHour} per hour</strong> of expert teaching. A private tutor is £50 an hour. And on average, each student sends around <strong>25 messages per lesson</strong> - that level of engagement is incomparable."
                  <br /><br />
                  <strong>If still too much:</strong> "We have monthly at £{primaryPricing.monthly}/month, cancel anytime. Or the £10 trial to start."
                </p>
              </div>
            )}
            {(showAllObjections || activeObjection === 'burned') && (
              <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.warning}`, marginBottom: '14px' }}>
                <span style={{ ...labelStyle, color: colors.warning }}>"We've tried tutoring before and it didn't work"</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "I'm sorry to hear that. What specifically didn't work?"
                  <br /><br />
                  <strong>If teaching quality:</strong> "That's why we only use the top 1% of teachers. Check Trustpilot - 1,700+ five-star reviews."
                  <br /><br />
                  <strong>If engagement:</strong> "Our lessons are live and interactive - on average, each student sends around <strong>25 messages per lesson</strong>. It's not passive watching."
                  <br /><br />
                  <strong>Either way:</strong> "With the 14-day guarantee, if history repeats, you get every penny back."
                </p>
              </div>
            )}
            {(showAllObjections || activeObjection === 'onetoone') && (
              <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.warning}`, marginBottom: '14px' }}>
                <span style={{ ...labelStyle, color: colors.warning }}>"I want 1-to-1, not group classes"</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "I completely understand. What specifically concerns you about group classes?"
                  <br /><br />
                  <strong>If attention:</strong> "Students ask questions in chat in real-time. On average, each student sends around <strong>25 messages per lesson</strong> - that's more engagement than most 1-to-1 sessions. Plus they see others asking questions they might be too shy to ask themselves."
                  <br /><br />
                  <strong>If shy:</strong> "No cameras, no speaking out loud - just typing. Shy students often participate MORE this way."
                  <br /><br />
                  <strong>Either way:</strong> "Teaching quality matters more than class size. Better to learn from a top 1% teacher in a group than a mediocre tutor 1-to-1."
                  <br /><br />
                  <strong style={{ color: colors.pro }}>If they still want more attention:</strong> "We do have a <strong>Pro package</strong> with smaller class sizes and priority support. I can tell you more about that if you'd like?"
                </p>
              </div>
            )}
            {(showAllObjections || activeObjection === 'times') && (
              <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.warning}`, marginBottom: '14px' }}>
                <span style={{ ...labelStyle, color: colors.warning }}>"The class times don't work"</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "I understand - schedules are tricky. Every lesson is recorded, so {hasSiblings ? 'the kids' : displayName(primaryChild)} can watch back whenever suits {hasSiblings ? 'them' : '[them]'}.
                  <br /><br />
                  Loads of students have football, music - they catch up later. Some prefer it because they can pause and rewind.
                  <br /><br />
                  Does that flexibility work?"
                </p>
              </div>
            )}
            {(showAllObjections || activeObjection === 'later') && (
              <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.warning}`, marginBottom: '14px' }}>
                <span style={{ ...labelStyle, color: colors.warning }}>"Can we start later / next month?"</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "I understand wanting to time it right. But from 21,000 students: earlier = better results.
                  <br /><br />
                  Every week is content {hasSiblings ? 'the kids miss' : `${displayName(primaryChild)} misses`} and {hasSiblings ? 'have' : 'has'} to catch up on. Our curriculum builds on itself.
                  <br /><br />
                  Plus the phone discount won't be available later. And with the 14-day guarantee, zero risk starting now.
                  <br /><br />
                  <strong>What would make this a yes for you today?</strong>"
                </p>
              </div>
            )}
            {(showAllObjections || activeObjection === 'quiet') && (
              <div style={{ ...scriptBoxStyle, borderLeft: `4px solid ${colors.warning}`, marginBottom: '14px' }}>
                <span style={{ ...labelStyle, color: colors.warning }}>Gone quiet / awkward silence</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  <strong>Option 1:</strong> "What are you thinking?"
                  <br /><br />
                  <strong>Option 2:</strong> "I've given you a lot of info - what questions do you have?"
                  <br /><br />
                  <strong>Option 3:</strong> "Where's your head at?"
                  <br /><br />
                  <em style={{ color: colors.darkGray }}>Then wait. Don't fill the silence. Let them speak first.</em>
                </p>
              </div>
            )}
            <div style={{ background: colors.lightBlue, padding: '14px 16px', marginTop: '16px', border: `2px solid ${colors.dark}` }}>
              <span style={{ ...labelStyle, color: colors.dark }}>ALL-PURPOSE CLOSES</span>
              <p style={{ margin: '8px 0 0 0', fontSize: '13px', lineHeight: '2' }}>
                <strong>1. "What would make this a yes?"</strong><br />
                <strong>2. "What's your main concern? What are you afraid of happening?"</strong><br />
                <strong>3. Best/Worst:</strong> "Best case: {hasSiblings ? 'the kids get' : `${displayName(primaryChild)} gets`} confident. Worst case: £10 trial. Which risk makes sense?"<br />
                <strong>4. 1-10:</strong> "Scale of 1-10, how interested? ... What gets you to 10?"
              </p>
            </div>
          </>)}
          {currentStep !== 'objections' && currentStep !== 'confirm' && (<div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}><button onClick={goToNextStep} style={{ padding: '12px 32px', background: colors.accent, border: 'none', color: colors.dark, cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '14px', borderRadius: 0 }}>Next →</button></div>)}
          </div>
        </div>
      </div>
      </>}
      {viewMode === 'trial' && <>
        {/* Objections panel — collapsible bar under header */}
        {showTrialObjections && <div style={{ background: '#fff8f0', borderBottom: `3px solid ${colors.warning}`, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '16px 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', color: colors.warning, fontFamily: 'Inter, sans-serif' }}>OBJECTION HANDLING</span>
              <button onClick={() => setShowTrialObjections(false)} style={{ padding: '2px 8px', background: 'transparent', border: '1px solid #ddd', color: colors.darkGray, fontSize: '10px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>CLOSE</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{ background: colors.white, padding: '12px 14px', border: '1px solid #e0e0e0', position: 'relative' }}>
                <CopyBtn id="obj-expensive" text={`"Totally understand — £749 feels significant.\n\nQuick comparison: a private tutor in the UK charges £40–60 an hour. Two sessions a week is £400–500 a month, for one random tutor with no curriculum, no homework support, no replays.\n\nThis is £749.55 for the full year — or 3 x £263 — with [Teacher Name], structured lessons twice a week, workbooks, homework, and video solutions for every question. And you're covered by a 14-day money-back guarantee.\n\nIf the value's there, does price change how you feel?"`} />
                <p style={{ margin: '0 0 6px 0', fontSize: '11px', fontWeight: '700', color: colors.warning, fontFamily: 'Inter, sans-serif' }}>"It's too expensive"</p>
                <p style={{ margin: 0, fontSize: '12px', lineHeight: '1.7', fontFamily: 'Inter, sans-serif' }}>
                  "Totally understand — £749 feels significant. A private tutor is £40–60/hr, two sessions a week is £400–500 a month. This is <strong>£749.55 for the full year</strong> — or <strong>3 x £263</strong>. 14-day money-back guarantee."
                </p>
                <p style={{ margin: '6px 0 0 0', fontSize: '11px', color: colors.darkGray, fontFamily: 'Inter, sans-serif' }}><strong>Still hesitant →</strong> "We can split it into 3 payments of £263."</p>
              </div>
              <div style={{ background: colors.white, padding: '12px 14px', border: '1px solid #e0e0e0', position: 'relative' }}>
                <CopyBtn id="obj-think" text={`"Completely fair. What's the main thing you're weighing? Is it the price, whether it'll work for [Student], or something else?"\n\n"Here's the thing — you're not going to go home, sit down, and think about maths tuition. You'll get busy, [Student] will have another homework battle, and the trial will expire.\n\nIt doesn't take more time to decide — it takes more information. What question do you still have that I can answer right now?"`} />
                <p style={{ margin: '0 0 6px 0', fontSize: '11px', fontWeight: '700', color: colors.warning, fontFamily: 'Inter, sans-serif' }}>"I need to think about it"</p>
                <p style={{ margin: 0, fontSize: '12px', lineHeight: '1.7', fontFamily: 'Inter, sans-serif' }}>
                  "What's the main thing you're weighing?" ... "You're not going to sit down and think about tuition. You'll get busy, trial will expire. <strong>It doesn't take more time — it takes more information.</strong> What question can I answer now?"
                </p>
              </div>
              <div style={{ background: colors.white, padding: '12px 14px', border: '1px solid #e0e0e0', position: 'relative' }}>
                <CopyBtn id="obj-partner" text={`"Makes complete sense. What do you think they'd want to know most?"\n\n"One option: start the monthly plan tonight at £180. That way you can show your partner what [Student] has been doing — much easier than explaining it. Cancel anytime if they're not happy. Fair?"`} />
                <p style={{ margin: '0 0 6px 0', fontSize: '11px', fontWeight: '700', color: colors.warning, fontFamily: 'Inter, sans-serif' }}>"Need to talk to my partner"</p>
                <p style={{ margin: 0, fontSize: '12px', lineHeight: '1.7', fontFamily: 'Inter, sans-serif' }}>
                  "What do you think they'd want to know most?" ... "Start <strong>monthly at £180</strong> tonight — show your partner what [Student] has been doing. Much easier than explaining it. Cancel anytime."
                </p>
              </div>
              <div style={{ background: colors.white, padding: '12px 14px', border: '1px solid #e0e0e0', position: 'relative' }}>
                <CopyBtn id="obj-1to1" text={`"That makes sense — 1-to-1 feels more personal. The question is whether personalisation actually drives better results, or whether it's the consistency and curriculum structure that matters.\n\nWhat most parents find is that [Teacher Name] teaches to the group but the workbooks, homework, and replays give [Student] the individual practice. It's the combination that works.\n\nWould you be open to giving them a few more lessons to see? Most students who feel like they need 1-to-1 actually thrive in this format once they're used to it."`} />
                <p style={{ margin: '0 0 6px 0', fontSize: '11px', fontWeight: '700', color: colors.warning, fontFamily: 'Inter, sans-serif' }}>"We prefer 1-to-1"</p>
                <p style={{ margin: 0, fontSize: '12px', lineHeight: '1.7', fontFamily: 'Inter, sans-serif' }}>
                  "1-to-1 feels personal — but consistency and curriculum structure drive results. [Teacher Name] teaches the group, workbooks and replays give individual practice. <strong>It's the combination that works.</strong>"
                </p>
              </div>
            </div>
          </div>
        </div>}
        {/* Trial content — centered */}
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '24px 20px' }}>

        {trialSection === 'touches' && <>
          {/* Track selector — clean cards */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
            {[
              { id: 'A', label: 'Never Logged In', color: colors.warning, icon: '!' },
              { id: 'B1', label: 'Logged In, No Lesson', color: colors.primary, icon: '~' },
              { id: 'B2', label: 'Attended — CLOSE', color: colors.success, icon: '\u2713' },
            ].map(track => (
              <button key={track.id} onClick={() => setSelectedTrack(track.id)} style={{ flex: 1, padding: '14px 12px', border: selectedTrack === track.id ? `2px solid ${track.color}` : '2px solid #e0e0e0', background: selectedTrack === track.id ? colors.white : '#fafafa', cursor: 'pointer', fontFamily: 'Inter, sans-serif', textAlign: 'left', borderRadius: 0, opacity: selectedTrack === track.id ? 1 : 0.6, transition: 'all 0.15s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ width: '22px', height: '22px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: selectedTrack === track.id ? track.color : '#ddd', color: colors.white, fontSize: '12px', fontWeight: '800', borderRadius: '50%' }}>{track.icon}</span>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: selectedTrack === track.id ? track.color : colors.darkGray }}>Track {track.id}</span>
                </div>
                <span style={{ fontSize: '11px', color: colors.darkGray, lineHeight: '1.3' }}>{track.label}</span>
              </button>
            ))}
          </div>

          {/* Track description */}
          <div style={{ ...tipBoxStyle, background: selectedTrack === 'A' ? '#fff3e0' : selectedTrack === 'B1' ? '#e3f2fd' : '#e8f5e9', borderLeft: `4px solid ${selectedTrack === 'A' ? colors.warning : selectedTrack === 'B1' ? colors.primary : colors.success}`, marginBottom: '20px' }}>
            {selectedTrack === 'A' && <>Student hasn't logged in. Automation owns Days 1–5. Rep escalates Day 5+.</>}
            {selectedTrack === 'B1' && <>Logged in but no lesson attended. Get them into a class before closing on price.</>}
            {selectedTrack === 'B2' && <>Behavioural hooks are active. Lead with annual upfront. The sale starts when they object.</>}
          </div>

          {/* TRACK A TOUCHES */}
          {selectedTrack === 'A' && <>
            <div style={sectionHeaderStyle}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T1 · Day 0 · Welcome</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>AUTOMATED · No rep action needed</span></div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="a-t1" text={`Hey [Parent Name],\n\nThank you so much for joining us. We're really excited to have you on board.\n\nYour student account is ready to be set up so you can start learning.\n\nPlease log in here: https://go.myedspace.co.uk/login\n\nTo access the live lessons, quizzes and revision materials, you first need to create your account and set a password.\n\nYou can watch the following video to start getting familiar with our platform: https://www.youtube.com/watch?v=1nH5IbEvB9g\n\nWe look forward to seeing you in class!`} />
              <span style={labelStyle}>Goal: Get them to log in and create their account</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                Hey [Parent Name],<br /><br />
                Thank you so much for joining us. We're really excited to have you on board.<br /><br />
                Your student account is ready to be set up so you can start learning.<br /><br />
                Please log in here: <strong>https://go.myedspace.co.uk/login</strong><br /><br />
                To access the live lessons, quizzes and revision materials, you first need to create your account and set a password.<br /><br />
                You can watch the following video to start getting familiar with our platform: <strong>https://www.youtube.com/watch?v=1nH5IbEvB9g</strong><br /><br />
                We look forward to seeing you in class!
              </p>
            </div>

            <div style={sectionHeaderStyle}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T1b · Day 1 · Login Nudge</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>AUTOMATED · No rep action needed</span></div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="a-t1b" text={`You've got 9 days left of your trial.\n\nLog in today to explore all the study resources available.\n\nHere is a reminder of what you have access to:\nhttps://intercom-help.eu/myedspace/en/articles/397280-timetables-for-2025-26-academic-year`} />
              <span style={labelStyle}>Goal: Remind them trial is active, drive first login</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                You've got 9 days left of your trial.<br /><br />
                Log in today to explore all the study resources available.<br /><br />
                Here is a reminder of what you have access to:<br />
                <strong>https://intercom-help.eu/myedspace/en/articles/397280-timetables-for-2025-26-academic-year</strong>
              </p>
            </div>

            <div style={sectionHeaderStyle}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T1c · Day 3 · One Week Left</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>AUTOMATED · No rep action needed</span></div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="a-t1c" text={`One week left to start improving grades\n\nA quick reminder that your trial is active.\n\nMake sure you log in and make the most of it before time runs out!`} />
              <span style={labelStyle}>Goal: Create urgency at the one-week mark</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                <strong>One week left to start improving grades</strong><br /><br />
                A quick reminder that your trial is active.<br /><br />
                Make sure you log in and make the most of it before time runs out!
              </p>
            </div>

            <div style={sectionHeaderStyle}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T1d · Day 5 · Halfway</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>AUTOMATED · No rep action needed</span></div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="a-t1d" text={`You're halfway through your trial and your classes are waiting.\n\nLogged in yet? If anything's blocked you, reply now and I'll fix it straight away.`} />
              <span style={labelStyle}>Goal: Surface blockers — offer immediate help</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                You're halfway through your trial and your classes are waiting.<br /><br />
                Logged in yet? If anything's blocked you, reply now and I'll fix it straight away.
              </p>
            </div>

            <div style={sectionHeaderStyle}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T1e · Day 7 · Stop Missing Out</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>AUTOMATED · No rep action needed</span></div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="a-t1e" text={`Stop missing out! 3 days left of your trial.\n\nWe haven't seen any login activity yet. If you still want to test this properly you can try it out today.`} />
              <span style={labelStyle}>Goal: Final automated push. 3 days left.</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                <strong>Stop missing out!</strong> 3 days left of your trial.<br /><br />
                We haven't seen any login activity yet. If you still want to test this properly you can try it out today.
              </p>
            </div>

            <div style={{ ...sectionHeaderStyle, background: colors.warning }}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T3 · Day 5 · Escalation Call</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>CALL twice first → WhatsApp if no answer</span></div>
            <div style={warningBoxStyle}><strong>Only call if student has still not logged in by Day 5.</strong></div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="a-t3" text={`"Hi, can I speak to [Parent Name]? It's [Your Name] calling from MyEdSpace."\n\n"Hi [Parent Name] — I'm just calling because [Student Name]'s trial started a few days ago but we haven't seen them log in yet, and I didn't want you to lose your trial days. Is everything okay with the setup?"`} />
              <span style={labelStyle}>Goal: First rep contact. Surface and fix login blockers.</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Hi, can I speak to [Parent Name]? It's [Your Name] calling from MyEdSpace."<br /><br />
                [If yes] "Hi [Parent Name] — I'm just calling because [Student Name]'s trial started a few days ago but we haven't seen them log in yet, and I didn't want you to lose your trial days. Is everything okay with the setup?"
              </p>
              <div style={{ ...listenForStyle, marginTop: '12px' }}>
                <strong>LISTEN — most common issues:</strong><br />
                → <strong>Didn't get the email:</strong> "No problem, you can head to https://myedspace.co.uk/dashboard and click 'first time logging in'"<br />
                → <strong>Too busy:</strong> "Totally fine — the trial is active until [end date]. Please login so you are able to see first hand how incredible our courses can be"<br />
                → <strong>Changed mind:</strong> "I understand — can I ask what put you off? I want to make sure it's not something we can fix for you."
              </div>
              <div style={{ ...scriptBoxStyle, background: '#f5f5f5', marginTop: '12px', position: 'relative' }}>
                <CopyBtn id="a-t3-vm" text={`Hey [Parent Name], it's [Your Name] from MyEdSpace — just calling because [Student Name]'s trial is running but they haven't logged in yet. Don't want you to miss out on the days you've paid for! Give me a call back or just reply to this message and we'll get them set up quickly. Speak soon.`} />
                <span style={{ ...labelStyle, color: colors.darkGray }}>VOICEMAIL</span>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.8' }}>
                  "Hey [Parent Name], it's [Your Name] from MyEdSpace — just calling because [Student Name]'s trial is running but they haven't logged in yet. Don't want you to miss out on the days you've paid for! Give me a call back or just reply to this message and we'll get them set up quickly. Speak soon."
                </p>
              </div>
            </div>

            <div style={{ ...sectionHeaderStyle, background: colors.primary }}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T4 · Day 7 · Urgency WhatsApp</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>WhatsApp</span></div>
            <div style={tipBoxStyle}>The 'reply STOP to cancel' creates urgency without pressure. It surfaces parents who are genuinely done — don't waste Touch 5 on them.</div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="a-t4" text={`Hey [Parent Name],\n\n[Student Name] has 3 days left on their trial — and hasn't logged in yet.\n\nYou're due to roll onto the £180/month plan when the trial ends.\n\nIf you'd like to cancel, just reply STOP and I'll take care of it.\n\nBut if you still want to give it a go - now's the time. We have live lessons every day this week. Reply and I'll send you today's schedule.`} />
              <span style={labelStyle}>Goal: Create urgency + surface intent</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                Hey [Parent Name],<br /><br />
                [Student Name] has 3 days left on their trial — and hasn't logged in yet.<br /><br />
                You're due to roll onto the <strong>£180/month</strong> plan when the trial ends.<br /><br />
                If you'd like to cancel, just reply STOP and I'll take care of it.<br /><br />
                But if you still want to give it a go - now's the time. We have live lessons every day this week. Reply and I'll send you today's schedule.
              </p>
            </div>

            <div style={{ ...sectionHeaderStyle, background: colors.dark }}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T5 · Day 10 · Final Close</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>CALL first, then WhatsApp</span></div>
            <div style={warningBoxStyle}>Don't spend a full close attempt on a Track A who never logged in. Goal: get them into B1 or close cleanly.</div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="a-t5" text={`FINAL NOTICE - DEADLINE TODAY:\n\n[Parent Name], [Student Name]'s trial ended today.\n\nWe're closing their account unless you'd like to continue.\n\nIf you'd like to keep access going, reply here and I'll set up a call.\nOr you can upgrade directly: [link]\n\nReply STOP to confirm you'd like to cancel. No hard feelings.`} />
              <span style={labelStyle}>FINAL WHATSAPP</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                <strong>FINAL NOTICE - DEADLINE TODAY:</strong><br /><br />
                [Parent Name], [Student Name]'s trial ended today.<br /><br />
                We're closing their account unless you'd like to continue.<br /><br />
                If you'd like to keep access going, reply here and I'll set up a call.<br />
                Or you can upgrade directly: [link]<br /><br />
                Reply STOP to confirm you'd like to cancel. No hard feelings.
              </p>
            </div>
          </>}

          {/* TRACK B1 TOUCHES */}
          {selectedTrack === 'B1' && <>
            <div style={sectionHeaderStyle}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T2 · Login Detected · Login Response</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>WhatsApp (rep-sent) · Within 24hrs of login</span></div>
            <div style={warningBoxStyle}>Warm lead. <strong>Don't close on price before they've attended a lesson.</strong> Get them to class first.</div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="b1-t2" text={`Hey [Parent Name] — saw [Student Name] has set up their account, nice one!\n\nQuick question: are you exploring the trial to see if the full programme would be right for them?\n\nTheir next live lesson is [Subject] on [Day] at [Time].\n\nThat's the best place to start — 60 minutes with [Teacher Name] and they'll get a real feel for how it works.\n\nAny questions before then? Happy to help.`} />
              <span style={labelStyle}>Goal: Acknowledge login. Direct them to first live lesson.</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                Hey [Parent Name] — saw [Student Name] has set up their account, nice one!<br /><br />
                Quick question: are you exploring the trial to see if the full programme would be right for them?<br /><br />
                Their next live lesson is <strong>[Subject]</strong> on <strong>[Day]</strong> at <strong>[Time]</strong>.<br /><br />
                That's the best place to start — 60 minutes with <strong>[Teacher Name]</strong> and they'll get a real feel for how it works.<br /><br />
                Any questions before then? Happy to help.
              </p>
            </div>

            <div style={{ ...sectionHeaderStyle, background: colors.warning }}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T3 · Day 3–4 · Check-In Call</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>CALL first → WhatsApp if no answer</span></div>
            <div style={tipBoxStyle}><strong>LISTEN</strong> after each question. Don't rush to price.</div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="b1-t3" text={`"Hi [Parent Name], it's [Your Name] from MyEdSpace. Have you got two minutes?"\n\n"Great — I'm just checking in because [Student Name] logged in but hasn't joined a live lesson yet. I wanted to make sure there wasn't anything getting in the way."`} />
              <span style={labelStyle}>Goal: Remove blockers. Bridge to attending first lesson.</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                <strong>OPENING:</strong><br />
                "Hi [Parent Name], it's [Your Name] from MyEdSpace. Have you got two minutes?"<br /><br />
                [If yes:]<br />
                "Great — I'm just checking in because [Student Name] logged in but hasn't joined a live lesson yet. I wanted to make sure there wasn't anything getting in the way."
              </p>
              <div style={{ ...listenForStyle, marginTop: '12px' }}>
                <strong>DISCOVER — one of these:</strong><br />
                → "Have they had a chance to look at the timetable?"<br />
                → "Is there a subject they're most behind on right now?"<br />
                → "What made you look into extra support for them?"
              </div>
              <div style={{ ...scriptBoxStyle, background: colors.accent, marginTop: '12px', position: 'relative' }}>
                <CopyBtn id="b1-t3-bridge" text={`"The best thing I can do for you right now is make sure [Student Name] actually gets into a class — because that's where it clicks. There's a [Subject] lesson today / tomorrow at [Time]. Can we get them in for that one?"`} />
                <span style={{ ...labelStyle, color: colors.dark }}>BRIDGE TO LESSON</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "The best thing I can do for you right now is make sure [Student Name] actually gets into a class — because that's where it clicks. There's a <strong>[Subject]</strong> lesson today / tomorrow at <strong>[Time]</strong>. Can we get them in for that one?"
                </p>
              </div>
              <div style={{ ...scriptBoxStyle, background: '#f5f5f5', marginTop: '12px', position: 'relative' }}>
                <CopyBtn id="b1-t3-vm" text={`Hey [Parent Name], [Your Name] from MyEdSpace. Just noticed [Student Name] logged in but hasn't joined a live lesson yet — wanted to check everything's okay and make sure they don't miss out. Give me a call back or text me whenever's good. Speak soon!`} />
                <span style={{ ...labelStyle, color: colors.darkGray }}>VOICEMAIL</span>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.8' }}>
                  "Hey [Parent Name], [Your Name] from MyEdSpace. Just noticed [Student Name] logged in but hasn't joined a live lesson yet — wanted to check everything's okay and make sure they don't miss out. Give me a call back or text me whenever's good. Speak soon!"
                </p>
              </div>
              <div style={{ ...scriptBoxStyle, background: '#f5f5f5', marginTop: '12px', position: 'relative' }}>
                <CopyBtn id="b1-t3-wa" text={`Hey [Parent Name] — tried to call just now, no worries if it's a bad time.\n\n[Student Name] is all set up but hasn't joined a lesson yet.\n\nThere's a [Subject] class [today/tomorrow] at [Time] — that's the best way to get a proper feel for the programme.\n\nWill you be in attendance?`} />
                <span style={{ ...labelStyle, color: colors.darkGray }}>WHATSAPP (if no answer on call)</span>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.8' }}>
                  "Hey [Parent Name] — tried to call just now, no worries if it's a bad time.<br /><br />
                  [Student Name] is all set up but hasn't joined a lesson yet.<br /><br />
                  There's a [Subject] class [today/tomorrow] at [Time] — that's the best way to get a proper feel for the programme.<br /><br />
                  Will you be in attendance?"
                </p>
              </div>
            </div>

            <div style={{ ...sectionHeaderStyle, background: colors.primary }}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T4 · Day 7 · Time-Based Push</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>WhatsApp</span></div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="b1-t4" text={`Hey [Parent Name],\n\n[Student Name] has 3 days left of their trial — and they haven't attended a live lesson yet.\n\nThe trial is designed around the live classes - that's the core of what you're testing. Without attending one, you won't really know if it's right for them.\n\nThere's still time: [Subject] lesson on [Day] at [Time].\n\nAre you able to attend?`} />
              <span style={labelStyle}>Goal: Urgency around trial ending without a lesson attended</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                Hey [Parent Name],<br /><br />
                [Student Name] has 3 days left of their trial — and they haven't attended a live lesson yet.<br /><br />
                The trial is designed around the live classes - that's the core of what you're testing. Without attending one, you won't really know if it's right for them.<br /><br />
                There's still time: <strong>[Subject]</strong> lesson on <strong>[Day]</strong> at <strong>[Time]</strong>.<br /><br />
                Are you able to attend?
              </p>
            </div>

            <div style={{ ...sectionHeaderStyle, background: colors.dark }}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T5 · Day 10 · Final Close</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>CALL + WhatsApp</span></div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="b1-t5-open" text={`"Hi [Parent Name], [Your Name] from MyEdSpace. [Student Name]'s trial ends today — I wanted to call before it closes."`} />
              <span style={labelStyle}>Goal: Last attempt. Push to lesson or close on what they've seen.</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                <strong>OPENING:</strong><br />
                "Hi [Parent Name], [Your Name] from MyEdSpace. [Student Name]'s trial ends today — I wanted to call before it closes."
              </p>
              <div style={{ ...scriptBoxStyle, background: '#e8f5e9', marginTop: '12px', border: `2px solid ${colors.success}` }}>
                <span style={{ ...labelStyle, color: colors.success }}>IF THEY ATTENDED A LESSON</span>
                <p style={{ margin: 0, fontSize: '13px' }}>→ Switch to <strong>Track B2 close script</strong>.</p>
              </div>
              <div style={{ ...scriptBoxStyle, marginTop: '12px', position: 'relative' }}>
                <CopyBtn id="b1-t5-nolesson" text={`"I know they haven't made it into a live class yet but maybe you had a chance to explore our award-winning learning platform?"`} />
                <span style={{ ...labelStyle, color: colors.warning }}>IF STILL NO LESSON ATTENDED</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "I know they haven't made it into a live class yet but maybe you had a chance to explore our award-winning learning platform?"<br /><br />
                  <em style={{ color: colors.darkGray }}>[If agreed — flag for Sean/manager to approve extension]</em>
                </p>
              </div>
              <div style={{ ...scriptBoxStyle, marginTop: '12px', position: 'relative' }}>
                <CopyBtn id="b1-t5-cancel" text={`"I completely understand. Can I ask — was it the setup, the timing, or something about what you saw that put you off?"`} />
                <span style={{ ...labelStyle, color: colors.darkGray }}>IF THEY WANT TO CANCEL</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "I completely understand. Can I ask — was it the setup, the timing, or something about what you saw that put you off?"<br /><br />
                  <em style={{ color: colors.darkGray }}>[Log reason in CRM — do not push further]</em>
                </p>
              </div>
              <div style={{ ...scriptBoxStyle, background: '#f5f5f5', marginTop: '12px', position: 'relative' }}>
                <CopyBtn id="b1-t5-final" text={`Hey [Parent Name],\n\n[Student Name]'s trial ends today.\n\nThey haven't attended a live lesson yet — which means you haven't really seen what you're buying. That's not a great position to make a decision from.\n\nIf you'd like to upgrade and give it a proper go, reply here.\n\nFull year: £749.55 upfront (or 3x £263)\nMonthly: £180/month - cancel anytime\n14-day money-back guarantee on all plans.\n\nReply STOP if you'd prefer to cancel. No worries at all.`} />
                <span style={{ ...labelStyle, color: colors.darkGray }}>FINAL WHATSAPP</span>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.8' }}>
                  "Hey [Parent Name],<br /><br />
                  [Student Name]'s trial ends today.<br /><br />
                  They haven't attended a live lesson yet — which means you haven't really seen what you're buying. That's not a great position to make a decision from.<br /><br />
                  If you'd like to upgrade and give it a proper go, reply here.<br /><br />
                  Full year: <strong>£749.55 upfront</strong> (or 3x £263)<br />
                  Monthly: <strong>£180/month</strong> - cancel anytime<br />
                  14-day money-back guarantee on all plans.<br /><br />
                  Reply STOP if you'd prefer to cancel. No worries at all."
                </p>
              </div>
            </div>
          </>}

          {/* TRACK B2 TOUCHES */}
          {selectedTrack === 'B2' && <>
            <div style={{ ...sectionHeaderStyle, background: colors.success }}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T3 · Post-Lesson Close</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>CALL first → WhatsApp if no answer · Call next morning after first lesson</span></div>
            <div style={warningBoxStyle}><strong>Behavioural hooks are active</strong> — endowment effect, commitment, loss aversion. Lead with annual. The sale starts when they object.</div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="b2-t3-open" text={`"Hi [Parent Name], it's [Your Name] from MyEdSpace. I saw [Student Name] was in their first lesson yesterday - I just wanted to check in quickly and see how they found it. Have you got two minutes?"`} />
              <span style={labelStyle}>OPENING (30 sec)</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Hi [Parent Name], it's [Your Name] from MyEdSpace. I saw [Student Name] was in their first lesson yesterday - I just wanted to check in quickly and see how they found it. Have you got two minutes?"
              </p>
            </div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="b2-t3-react" text={`"How did [Student Name] find it?"`} />
              <span style={labelStyle}>REACTION CHECK (1–2 min)</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "How did [Student Name] find it?"
              </p>
              <div style={{ ...listenForStyle, marginTop: '12px' }}>
                → Let them talk. Don't interrupt. Use: "That makes sense." / "I hear that a lot."<br />
                → <strong>If positive:</strong> "What did they say about it specifically?" [Let them sell it to themselves]<br />
                → <strong>If neutral:</strong> "That's normal for class one — they're finding their feet. Did they follow what [Teacher] was explaining?"<br />
                → <strong>If negative:</strong> "Tell me more — was it the content, the format, or how it was taught?" [Diagnose first, don't defend]
              </div>
            </div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="b2-t3-label" text={`"So from what you're telling me — [Student] engaged, followed along, and [specific thing they said]. Is that right?"\n\n"That matters more than people realise at this stage. Class one is the adjustment."`} />
              <span style={labelStyle}>LABEL THE PROGRESS (30 sec)</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "So from what you're telling me — [Student] engaged, followed along, and [specific thing they said]. Is that right?"<br /><br />
                "That matters more than people realise at this stage. Class one is the adjustment."
              </p>
            </div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="b2-t3-pain" text={`"Quick question: when you first signed up — what was the main thing you were hoping this would fix for [Student Name]?"\n\n"And is that still the main thing?"`} />
              <span style={labelStyle}>SURFACE ORIGINAL PAIN (1 min)</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Quick question: when you first signed up — what was the main thing you were hoping this would fix for [Student Name]?"<br /><br />
                "And is that still the main thing?"
              </p>
            </div>
            <div style={{ ...scriptBoxStyle, background: '#f0fdf4', border: `2px solid ${colors.success}`, position: 'relative' }}>
              <CopyBtn id="b2-t3-pivot" text={`"Here's the thing — and I want to be straight with you. The way the programme works, the first few lessons are foundation. That's when [Student] is building the mental map for everything after it. If you stop now, that foundation doesn't go anywhere useful. The parents who see the biggest change are the ones who lock in through the first 4–6 weeks. That's when results show up."`} />
              <span style={{ ...labelStyle, color: colors.success }}>PROTECT THE PROGRESS PIVOT (1–2 min)</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Here's the thing — and I want to be straight with you. The way the programme works, the first few lessons are foundation. That's when [Student] is building the mental map for everything after it. If you stop now, that foundation doesn't go anywhere useful. The parents who see the biggest change are the ones who lock in through the first 4–6 weeks. That's when results show up."
              </p>
            </div>
            <div style={{ ...sectionHeaderStyle, background: colors.dark, marginTop: '20px' }}><h2 style={{ margin: 0, fontSize: '16px', fontWeight: '800' }}>CLOSE — TIERED</h2></div>
            <div style={{ ...scriptBoxStyle, background: colors.accent, position: 'relative' }}>
              <CopyBtn id="b2-tier1" text={`"Here's what most families do after the first class: they lock in the full year. It's £749.55 upfront — or 3 payments of £263 — and [Student] is set through to June. No renewals, no decisions every month. And you're covered by a 14-day money-back guarantee. Should I get [Student Name] set up on the annual?"`} />
              <span style={{ ...labelStyle, color: colors.dark }}>TIER 1 — ANNUAL UPFRONT (lead with this)</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Here's what most families do after the first class: they lock in the full year. It's <strong>£749.55 upfront</strong> — or 3 payments of £263 — and [Student] is set through to June. No renewals, no decisions every month. And you're covered by a <strong>14-day money-back guarantee</strong>. Should I get [Student Name] set up on the annual?"<br /><br />
                <strong style={{ color: colors.success }}>→ If YES: STOP. Confirm. Send payment link. Don't keep talking.</strong>
              </p>
            </div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="b2-tier2" text={`"Totally fair. We can do it in 3 payments of £263 instead. Same full-year access, just spread out. Want to go with that?"`} />
              <span style={labelStyle}>TIER 2 — INSTALMENT PLAN</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Totally fair. We can do it in <strong>3 payments of £263</strong> instead. Same full-year access, just spread out. Want to go with that?"
              </p>
            </div>
            <div style={{ ...scriptBoxStyle, background: '#fafafa', position: 'relative' }}>
              <CopyBtn id="b2-tier3" text={`"Or we have monthly £180, cancel anytime. Most families start there and switch to annual once they see [Student] getting on well. Want to start monthly?"`} />
              <span style={{ ...labelStyle, color: colors.darkGray }}>TIER 3 — MONTHLY (last resort)</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Or we have monthly <strong>£180, cancel anytime</strong>. Most families start there and switch to annual once they see [Student] getting on well. Want to start monthly?"
              </p>
            </div>
            <div style={{ ...scriptBoxStyle, background: colors.lightBlue, position: 'relative' }}>
              <CopyBtn id="b2-bamfam" text={`"Great. I'm sending the payment link now. Once that's done, [Student] is confirmed for [next class date]. Nothing else you need to do — just show up."`} />
              <span style={{ ...labelStyle, color: colors.dark }}>NEXT STEPS (BAMFAM)</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Great. I'm sending the payment link now. Once that's done, [Student] is confirmed for [next class date]. Nothing else you need to do — just show up."
              </p>
            </div>
            <div style={{ ...scriptBoxStyle, background: '#f5f5f5', marginTop: '12px', position: 'relative' }}>
              <CopyBtn id="b2-t3-vm" text={`Hey [Parent Name], [Your Name] from MyEdSpace. Just saw [Student Name] has been in lessons — wanted to check in quickly to see how they're finding it. Give me a call back or text whenever you have two minutes. Would love to hear what they thought. Thanks!`} />
              <span style={{ ...labelStyle, color: colors.darkGray }}>VOICEMAIL</span>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.8' }}>
                "Hey [Parent Name], [Your Name] from MyEdSpace. Just saw [Student Name] has been in lessons — wanted to check in quickly to see how they're finding it. Give me a call back or text whenever you have two minutes. Would love to hear what they thought. Thanks!"
              </p>
            </div>
            <div style={{ ...scriptBoxStyle, background: '#f5f5f5', marginTop: '12px', position: 'relative' }}>
              <CopyBtn id="b2-t3-wa" text={`Hey [Parent Name] — just saw [Student Name] was in their first lesson. How did they find it? Would love to hear their thoughts.`} />
              <span style={{ ...labelStyle, color: colors.darkGray }}>WHATSAPP (if no answer)</span>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.8' }}>
                "Hey [Parent Name] — just saw [Student Name] was in their first lesson. How did they find it? Would love to hear their thoughts."<br /><br />
                <em>[Wait for response — don't send the close in the same message]</em>
              </p>
            </div>

            <div style={{ ...sectionHeaderStyle, background: colors.primary, marginTop: '24px' }}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T4 · Day 7 · Upsell Push</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>WhatsApp</span></div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="b2-t4" text={`Hey [Parent Name],\n\n[Student Name]'s trial ends in 3 days. They've been in [X] lessons so far — the progress they've built this week is real, but it needs to continue to stick.\n\nHere's what happens if you don't continue:\nAccess closes. No more live classes, no replays, no homework support. The momentum stops.\n\nHere's what happens if you do:\nThey carry straight on into next week's class without missing a beat.\n\nFull year: £749.55 upfront — or 3 x £263\nMonthly: £180/month, cancel anytime\n14-day money-back guarantee on all options.\n\nReply UPGRADE and I'll get it sorted. Or reply with any questions.`} />
              <span style={labelStyle}>Goal: Loss aversion + momentum framing. Push annual.</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                Hey [Parent Name],<br /><br />
                [Student Name]'s trial ends in 3 days. They've been in [X] lessons so far — the progress they've built this week is real, but it needs to continue to stick.<br /><br />
                <strong>Here's what happens if you don't continue:</strong><br />
                Access closes. No more live classes, no replays, no homework support. The momentum stops.<br /><br />
                <strong>Here's what happens if you do:</strong><br />
                They carry straight on into next week's class without missing a beat.<br /><br />
                Full year: <strong>£749.55 upfront</strong> — or 3 x £263<br />
                Monthly: <strong>£180/month</strong>, cancel anytime<br />
                14-day money-back guarantee on all options.<br /><br />
                Reply UPGRADE and I'll get it sorted. Or reply with any questions.
              </p>
            </div>

            <div style={{ ...sectionHeaderStyle, background: colors.dark, marginTop: '24px' }}><h2 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>T5 · Day 10 · Final Close</h2><span style={{ fontSize: '11px', opacity: 0.8 }}>CALL + WhatsApp</span></div>
            <div style={{ ...scriptBoxStyle, position: 'relative' }}>
              <CopyBtn id="b2-t5-open" text={`"Hi [Parent Name], [Your Name] from MyEdSpace. [Student Name]'s trial ends today — I wanted to make sure you had everything you need to make a decision. How are they finding the classes?"`} />
              <span style={labelStyle}>Goal: Hard close. Overcome final objections. Send payment link immediately on yes.</span>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                "Hi [Parent Name], [Your Name] from MyEdSpace. [Student Name]'s trial ends today — I wanted to make sure you had everything you need to make a decision. How are they finding the classes?"
              </p>
              <div style={{ ...scriptBoxStyle, background: '#e8f5e9', marginTop: '12px', border: `2px solid ${colors.success}`, position: 'relative' }}>
                <CopyBtn id="b2-t5-pos" text={`"I'm glad it's been good. Here's the thing: today's the last day, and I'd hate for them to lose the progress they've built. The annual plan is £749.55, or we can do 3 x £263. Which works better for you?"`} />
                <span style={{ ...labelStyle, color: colors.success }}>IF POSITIVE — CLOSE IMMEDIATELY</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "I'm glad it's been good. Here's the thing: today's the last day, and I'd hate for them to lose the progress they've built. The annual plan is <strong>£749.55</strong>, or we can do <strong>3 x £263</strong>. Which works better for you?"<br /><br />
                  <strong style={{ color: colors.success }}>→ If YES: Send link immediately.</strong>
                </p>
              </div>
              <div style={{ ...scriptBoxStyle, marginTop: '12px' }}>
                <span style={{ ...labelStyle, color: colors.warning }}>IF HESITANT — SURFACE THE REAL OBJECTION</span>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                  "What's the main thing giving you pause?"<br /><br />
                  → <strong>Price:</strong> [see objection handling section]<br />
                  → <strong>Need to talk to partner:</strong> "What do you think they'd want to know? I can help you answer anything they'd ask."<br />
                  → <strong>Not sure it's working yet:</strong> "That's honest — what would 'working' look like for [Student]? Let's talk about what you've seen so far."
                </p>
              </div>
            </div>
            <div style={{ ...scriptBoxStyle, background: '#f5f5f5', marginTop: '12px', position: 'relative' }}>
              <CopyBtn id="b2-t5-final" text={`[Parent Name], [Student Name]'s trial ends today.\n\nThey've attended [X] lessons - don't let that progress stop here.\n\nFull year: £749.55 (or 3 x £263) - set through to June\nMonthly: £180/month - cancel anytime\n14-day money-back guarantee on all plans.\n\nReply UPGRADE and we can discuss the options.\nReply STOP to cancel. No hard feelings.`} />
              <span style={{ ...labelStyle, color: colors.darkGray }}>FINAL WHATSAPP</span>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.8' }}>
                [Parent Name], [Student Name]'s trial ends today.<br /><br />
                They've attended [X] lessons - don't let that progress stop here.<br /><br />
                Full year: <strong>£749.55</strong> (or 3 x £263) - set through to June<br />
                Monthly: <strong>£180/month</strong> - cancel anytime<br />
                14-day money-back guarantee on all plans.<br /><br />
                Reply UPGRADE and we can discuss the options.<br />
                Reply STOP to cancel. No hard feelings.
              </p>
            </div>
          </>}
        </>}

        </div>
      </>}
    </div>
  );
}