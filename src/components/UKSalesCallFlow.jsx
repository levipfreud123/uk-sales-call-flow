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
const standardPricing = {
  currentYear: { 1: { annual: 319, original: 480, lessons: 74 }, 2: { annual: 574.20, original: 864, lessons: 148 }, ultimate: { annual: 789, original: 1080, lessons: 222 } },
  currentYearY11Y13: { 1: { annual: 319, original: 400, lessons: 66 }, 2: { annual: 574.20, original: 720, lessons: 132 }, ultimate: { annual: 789, original: 900, lessons: 330 } },
  multiYear: { 1: { annual: 669, original: 1280, lessons: 148 }, 2: { annual: 1204.20, original: 2304, lessons: 296 }, ultimate: { annual: 1589, original: 2880, lessons: 444 } },
  multiYearY10Y11Y12: { 1: { annual: 669, original: 1200, lessons: 140 }, 2: { annual: 1204.20, original: 2160, lessons: 280 }, ultimate: { annual: 1589, original: 2700, lessons: 700 } },
  monthly: { 1: 80, 2: 144, ultimate: 180 },
};
const proPricing = {
  currentYear: { 1: { annual: 449, original: 660, lessons: 74 }, 2: { annual: 808.20, original: 1188, lessons: 148 }, ultimate: { annual: 939, original: 1440, lessons: 222 } },
  currentYearY10: { 1: { annual: 449, original: 660, lessons: 74 }, 2: { annual: 808.20, original: 1188, lessons: 148 }, ultimate: { annual: 939, original: 1440, lessons: 370 } },
  currentYearY11: { 1: { annual: 449, original: 550, lessons: 66 }, 2: { annual: 808.20, original: 990, lessons: 132 }, ultimate: { annual: 939, original: 1200, lessons: 330 } },
  currentYearY13: { 1: { annual: 449, original: 550, lessons: 66 }, 2: { annual: 808.20, original: 990, lessons: 132 }, ultimate: { annual: 939, original: 1200, lessons: 198 } },
  multiYear: { 1: { annual: 979, original: 1760, lessons: 148 }, 2: { annual: 1762.20, original: 3168, lessons: 296 }, ultimate: { annual: 1999, original: 3840, lessons: 444 } },
  multiYearY9: { 1: { annual: 979, original: 1760, lessons: 148 }, 2: { annual: 1762.20, original: 3168, lessons: 296 }, ultimate: { annual: 1999, original: 3840, lessons: 592 } },
  multiYearY10: { 1: { annual: 979, original: 1650, lessons: 148 }, 2: { annual: 1762.20, original: 2970, lessons: 280 }, ultimate: { annual: 1999, original: 3600, lessons: 700 } },
  multiYearY11: { 1: { annual: 979, original: 1650, lessons: 132 }, 2: { annual: 1762.20, original: 2970, lessons: 264 }, ultimate: { annual: 1999, original: 3600, lessons: 660 } },
  multiYearY12: { 1: { annual: 979, original: 1650, lessons: 148 }, 2: { annual: 1762.20, original: 2970, lessons: 280 }, ultimate: { annual: 1999, original: 3600, lessons: 420 } },
  monthly: { 1: 120, 2: 216, ultimate: 270 },
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
  const [currentStep, setCurrentStep] = useState('open');
  const [children, setChildren] = useState([{ ...emptyChild }]);
  const [painPoints, setPainPoints] = useState('');
  const [desiredOutcome, setDesiredOutcome] = useState('');
  const [pastAttempts, setPastAttempts] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isPro, setIsPro] = useState(false);
  const [showAllObjections, setShowAllObjections] = useState(false);
  const [activeObjection, setActiveObjection] = useState(null);
  const [copied, setCopied] = useState(false);
  const clearAll = () => {
    setChildren([{ ...emptyChild }]);
    setPainPoints('');
    setDesiredOutcome('');
    setPastAttempts('');
    setAdditionalNotes('');
    setCurrentStep('open');
    setActiveObjection(null);
    setShowAllObjections(false);
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

    let priceTable;
    if (isPro) {
      if (multi) {
        if (yg === 'Year 9') priceTable = pricing.multiYearY9;
        else if (yg === 'Year 10') priceTable = pricing.multiYearY10;
        else if (yg === 'Year 11') priceTable = pricing.multiYearY11;
        else if (yg === 'Year 12') priceTable = pricing.multiYearY12;
        else priceTable = pricing.multiYear;
      } else {
        if (yg === 'Year 10') priceTable = pricing.currentYearY10;
        else if (yg === 'Year 11') priceTable = pricing.currentYearY11;
        else if (yg === 'Year 13') priceTable = pricing.currentYearY13;
        else priceTable = pricing.currentYear;
      }
    } else {
      const isY11Y13 = yg === 'Year 11' || yg === 'Year 13';
      const isY10Y11Y12 = ['Year 10', 'Year 11', 'Year 12'].includes(yg);
      priceTable = multi ? (isY10Y11Y12 ? pricing.multiYearY10Y11Y12 : pricing.multiYear) : (isY11Y13 ? pricing.currentYearY11Y13 : pricing.currentYear);
    }

    const tier = subjectCount >= 3 ? 'ultimate' : subjectCount;
    const tierData = priceTable[tier] || priceTable[1];
    const monthlyPrice = pricing.monthly[tier >= 3 ? 'ultimate' : tier] || pricing.monthly[1];
    const phoneDiscount = tierData.annual * 0.95;

    return {
      annual: tierData.annual, original: tierData.original, lessons: tierData.lessons, monthly: monthlyPrice,
      instalments3: (tierData.annual / 3).toFixed(2), upfront: (tierData.annual * 0.95).toFixed(2),
      phonePrice: phoneDiscount.toFixed(2), saving: (tierData.original - tierData.annual).toFixed(0),
      phoneSaving: (tierData.original - phoneDiscount).toFixed(0), pricePerHour: (tierData.annual / tierData.lessons).toFixed(2),
      subjectCount, lessonsPerMonth: subjectCount * 8, tutorCost: subjectCount * 8 * 50, isMultiYear: multi,
    };
  };
  const getTotalPricing = () => {
    if (children.length === 1) return getPricing(primaryChild);
    const prices = children.map(c => getPricing(c)).sort((a, b) => b.annual - a.annual);
    const fullPrice = prices[0].annual;
    const discountedPrices = prices.slice(1).map(p => p.annual * 0.8);
    const total = fullPrice + discountedPrices.reduce((a, b) => a + b, 0);
    return {
      total, phoneTotal: (total * 0.95).toFixed(2),
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
      {/* Header */}
      <div style={{ background: colors.dark, padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <h1 style={{ margin: 0, color: colors.white, fontSize: '15px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>MyEdSpace Sales</h1>
          <button onClick={clearAll} style={{ padding: '4px 10px', background: 'transparent', color: '#888', border: '1px solid #555', fontSize: '10px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>⟲ CLEAR</button>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setIsPro(!isPro)} style={{ padding: '5px 12px', background: isPro ? colors.pro : 'transparent', color: isPro ? colors.white : '#ccc', border: `1px solid ${isPro ? colors.pro : '#555'}`, fontSize: '11px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>{isPro ? '⭐ PRO' : 'STANDARD'}</button>
          <button onClick={() => setCurrentStep('objections')} style={{ padding: '5px 12px', background: colors.warning, color: colors.white, border: 'none', fontSize: '11px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, sans-serif', borderRadius: 0 }}>OBJECTIONS</button>
        </div>
      </div>
      {/* Navigation */}
      <div style={{ background: colors.primary, display: 'flex' }}>
        {steps.slice(0, -1).map((step) => (
          <button key={step.id} onClick={() => { setCurrentStep(step.id); setActiveObjection(null); }} style={{ flex: 1, padding: '11px 8px', border: 'none', background: currentStep === step.id ? colors.accent : 'transparent', color: currentStep === step.id ? colors.dark : 'rgba(255,255,255,0.85)', cursor: 'pointer', fontSize: '12px', fontWeight: '600', fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>{step.label}</button>
        ))}
      </div>
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
                On average, <strong>each student sends around 25 messages per lesson</strong> - that level of engagement is incomparable to a normal classroom."
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
                Some kids actually prefer the recordings because they can pause and rewatch the tricky parts."
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
                      const currentYearPricing = isPro ? proPricing.currentYear : standardPricing.currentYear;
                      const subjectKey = primaryPricing.subjectCount === 1 ? 1 : primaryPricing.subjectCount === 2 ? 2 : 'ultimate';
                      return currentYearPricing[subjectKey]?.original;
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
                "Or if you'd prefer flexibility, we have monthly at <strong>£{primaryPricing.monthly}/month</strong> - no lock-in, cancel anytime.{isExamYear(primaryChild.yearGroup) && <><br /><br /><em style={{ color: colors.warning }}>Note: Monthly doesn't include Easter Revision or Cram Course.</em></>}"
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
                      const multiYearPricing = isPro ? proPricing.multiYear : standardPricing.multiYear;
                      const subjectKey = primaryPricing.subjectCount === 1 ? 1 : primaryPricing.subjectCount === 2 ? 2 : 'ultimate';
                      return multiYearPricing[subjectKey]?.original;
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
    </div>
  );
}