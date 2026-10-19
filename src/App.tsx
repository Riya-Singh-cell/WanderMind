import { useState } from 'react';
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  CircleHelp,
  Compass,
  Heart,
  LayoutDashboard,
  Map,
  MapPin,
  Menu,
  Plane,
  Plus,
  Search,
  Settings,
  Sparkles,
  Tag,
  TrainFront,
  UserRound,
  WalletCards,
  X,
} from 'lucide-react';

type Destination = {
  name: string;
  eyebrow: string;
  details: string;
  image: string;
  tone: string;
};

const japanImage = 'https://images.pexels.com/photos/4336279/pexels-photo-4336279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const destinations: Destination[] = [
  { name: 'Japan', eyebrow: 'Culture · Food · Nature', details: '7–10 days  ·  ₹1,20,000+', image: japanImage, tone: 'pink' },
  { name: 'Switzerland', eyebrow: 'Mountains · Adventure', details: '6–9 days  ·  ₹1,50,000+', image: 'https://images.pexels.com/photos/35309605/pexels-photo-35309605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', tone: 'blue' },
  { name: 'Bali', eyebrow: 'Beaches · Relaxation', details: '5–7 days  ·  ₹70,000+', image: 'https://images.pexels.com/photos/11039532/pexels-photo-11039532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', tone: 'teal' },
  { name: 'Singapore', eyebrow: 'City Life · Food · Shopping', details: '4–6 days  ·  ₹80,000+', image: 'https://images.pexels.com/photos/18662417/pexels-photo-18662417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', tone: 'orange' },
];

const agents = [
  { number: '01', title: 'Destination Agent', text: 'Finds top attractions and experiences', icon: MapPin, color: 'pink' },
  { number: '02', title: 'Budget Agent', text: 'Estimates costs and keeps within your budget', icon: WalletCards, color: 'violet' },
  { number: '03', title: 'Stay & Transport', text: 'Recommends hotels, flights and local travel', icon: TrainFront, color: 'blue' },
  { number: '04', title: 'Itinerary Agent', text: 'Creates day-wise schedules and routes', icon: CalendarDays, color: 'green' },
  { number: '05', title: 'Critic Agent', text: 'Validates, checks feasibility and refines', icon: Check, color: 'yellow' },
];

const itinerary = [
  { day: 'Day 1', title: 'Arrival in Tokyo', sub: 'Check-in · Explore Shibuya', image: japanImage },
  { day: 'Day 2', title: 'Tokyo Highlights', sub: 'Sensoji Temple · Skytree · Akihabara', image: japanImage },
  { day: 'Day 3', title: 'Travel to Kyoto', sub: 'Bullet train · Fushimi Inari Shrine', image: 'https://images.pexels.com/photos/31418358/pexels-photo-31418358.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { day: 'Day 4', title: 'Kyoto Exploration', sub: 'Kiyomizu-dera · Gion District', image: 'https://images.pexels.com/photos/31710067/pexels-photo-31710067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [toast, setToast] = useState('');
  const [showMobileNav, setShowMobileNav] = useState(false);

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 2800);
  };

  return (
    <div className="app-shell">
      <aside className={`sidebar ${showMobileNav ? 'sidebar-open' : ''}`}>
        <div className="brand"><span className="brand-mark"><Plane size={19} fill="currentColor" /></span><div><strong>WanderMind</strong><span>AI Travel Planner</span></div></div>
        <nav className="side-nav" aria-label="Main navigation">
          <p className="nav-label">Workspace</p>
          {[
            ['Home', LayoutDashboard], ['Plan New Trip', Plus], ['My Trips', CalendarDays], ['Saved Places', Heart], ['Travel Guides', Map],
          ].map(([label, Icon]) => (
            <button className={`nav-item ${activeNav === label ? 'active' : ''}`} key={label as string} onClick={() => { setActiveNav(label as string); setShowMobileNav(false); }}>
              <Icon size={17} strokeWidth={1.8} /><span>{label as string}</span>
            </button>
          ))}
          <div className="nav-rule" />
          <p className="nav-label">AI Agents</p>
          {[
            ['Destination Agent', MapPin], ['Itinerary Agent', CalendarDays], ['Budget Agent', WalletCards], ['Stay & Transport Agent', TrainFront], ['Critic Agent', Check],
          ].map(([label, Icon]) => <button className="nav-item agent-link" key={label as string} onClick={() => notify(`${label as string} is ready to help.`)}><Icon size={17} strokeWidth={1.8} /><span>{label as string}</span></button>)}
        </nav>
        <div className="sidebar-promo"><div className="promo-plane"><Plane size={37} /></div><strong>Let AI plan<br />your next<br />adventure</strong><small>Smarter trips.<br />Happier memories.</small><div className="promo-sun" /></div>
        <div className="sidebar-footer"><button onClick={() => notify('Help center opened')}><CircleHelp size={17} />Help center</button><button onClick={() => notify('Settings opened')}><Settings size={17} />Settings</button></div>
      </aside>

      <main className="main-content">
        <header className="topbar"><button className="mobile-menu" onClick={() => setShowMobileNav(!showMobileNav)} aria-label="Open menu"><Menu size={21} /></button><div className="breadcrumb">Good morning, Riya <span>·</span> <b>Ready for your next adventure?</b></div><div className="top-actions"><button aria-label="Search"><Search size={18} /></button><button className="notification" aria-label="Notifications" onClick={() => notify('You have 3 new trip updates')}><Bell size={18} /><i /></button><div className="avatar">R</div><span className="user-name">Riya</span><ChevronRight size={14} className="rotate-90" /></div></header>

        <div className="page-wrap">
          <section className="hero">
            <img src={japanImage} alt="Mount Fuji and a Japanese pagoda" />
            <div className="hero-overlay" />
            <div className="hero-copy"><div className="overline">MULTI-AGENT AI TRAVEL PLANNER</div><h1>Your Dream Trip,<br />Planned by <em>AI Agents</em></h1><p>Tell us where you want to go. Our AI agents will research,<br className="desktop-only" /> plan and create a personalized itinerary for you.</p></div>
            <div className="trip-builder"><div className="field"><MapPin size={17} /><div><b>Where to?</b><span>{selectedDestination || 'e.g. Japan, Switzerland, Bali...'}</span></div></div><div className="field"><CalendarDays size={17} /><div><b>Dates</b><span>Select dates</span></div></div><div className="field"><UserRound size={17} /><div><b>Travelers</b><span>2 travelers</span></div></div><button className="primary-button" onClick={() => notify(selectedDestination ? `Planning your ${selectedDestination} trip...` : 'Choose a destination to start planning')}><Sparkles size={16} />Plan My Trip</button></div>
            <div className="quick-destinations">{['Japan', 'Switzerland', 'Bali', 'Singapore', 'Thailand', 'Italy', 'USA'].map(place => <button key={place} className={selectedDestination === place ? 'selected' : ''} onClick={() => setSelectedDestination(place)}>{place}</button>)}</div>
          </section>

          <div className="content-grid">
            <div className="feed-column">
              <section className="section-block"><div className="section-heading"><div><h2>How Our AI Agents Work</h2><p>Multiple specialized agents collaborate to create the perfect travel plan for you.</p></div><button className="text-link" onClick={() => notify('Learn more coming soon')}>Learn More <ArrowRight size={15} /></button></div><div className="agent-grid">{agents.map(agent => { const Icon = agent.icon; return <button className={`agent-card ${agent.color}`} key={agent.title} onClick={() => notify(`${agent.title} selected`)}><span className="agent-icon"><Icon size={18} /></span><b>{agent.number}. {agent.title}</b><span>{agent.text}</span></button>; })}</div></section>
              <section className="section-block"><div className="section-heading compact"><h2>Popular Destinations</h2><button className="text-link" onClick={() => notify('Showing all destinations')}>View All <ArrowRight size={15} /></button></div><div className="destination-grid">{destinations.map(destination => <button className="destination-card" key={destination.name} onClick={() => setSelectedDestination(destination.name)}><img src={destination.image} alt={destination.name} /><div className="destination-shade" /><Heart className="heart" size={16} /><div className="destination-copy"><b>{destination.name}</b><span>{destination.eyebrow}</span><small>{destination.details}</small></div></button>)}</div></section>
              <section className="section-block"><div className="section-heading compact"><h2>Featured Itineraries</h2><button className="text-link" onClick={() => notify('Showing all itineraries')}>See More <ArrowRight size={15} /></button></div><div className="featured-list">{[['7 Days in Japan', 'From ₹1,20,000', japanImage, '7 days'], ['5 Days in Bali', 'From ₹70,000', destinations[2].image, '5 days'], ['8 Days in Switzerland', 'From ₹1,50,000', destinations[1].image, '8 days']].map(([title, price, image, days]) => <button className="featured-item" key={title} onClick={() => notify(`${title} itinerary selected`)}><img src={image} alt="" /><div><b>{title}</b><span>{price}</span><small><CalendarDays size={12} />{days}</small></div><span className="round-arrow"><ArrowRight size={14} /></span></button>)}</div></section>
            </div>

            <aside className="trip-panel"><div className="panel-top"><span className="status"><i /> Generated</span><button aria-label="More options"><Tag size={15} /></button></div><img className="trip-cover" src={japanImage} alt="Japan temple and Mount Fuji" /><div className="trip-body"><h3>Japan Adventure</h3><p>15 Apr 2026 – 22 Apr 2026</p><div className="trip-meta"><span><CalendarDays size={13} />7 days</span><span><UserRound size={13} />2 travelers</span></div><div className="trip-actions"><button className="primary-small" onClick={() => notify('Opening full itinerary')}>View Full Itinerary</button><button className="outline-small" onClick={() => notify('Edit mode enabled')}>Edit Plan</button></div><h4>Trip Overview <span>View map</span></h4><div className="overview-grid"><span><Plane size={14} />Tokyo, Osaka, Kyoto</span><span><CalendarDays size={14} />7 days</span><span><UserRound size={14} />2 travelers</span><span><Tag size={14} />Culture, Food, Nature</span></div><div className="map-preview"><div className="map-lines" /><span className="map-pin pin-one">Tokyo</span><span className="map-pin pin-two">Kyoto</span><span className="map-pin pin-three">Osaka</span></div><div className="itinerary-heading"><h4>Day-wise Itinerary</h4><button onClick={() => notify('All itinerary days opened')}>View All <ArrowRight size={12} /></button></div><div className="itinerary-list">{itinerary.map(item => <button className="itinerary-row" key={item.day}><i /><img src={item.image} alt="" /><div><b>{item.title}</b><span>{item.sub}</span></div><ChevronRight size={15} /></button>)}</div><h4 className="cost-title">Estimated Cost Breakdown</h4><div className="costs"><span><Plane size={13} />Flights <b>₹45,000</b></span><span><CalendarDays size={13} />Hotels (6 nights) <b>₹36,000</b></span><span><TrainFront size={13} />Local Transport <b>₹8,000</b></span><span><WalletCards size={13} />Food & Activities <b>₹20,000</b></span></div><div className="total-cost"><span>Total Estimated Cost</span><b>₹1,09,000</b></div></div></aside>
          </div>
        </div>
      </main>
      {toast && <div className="toast"><Check size={16} />{toast}<button onClick={() => setToast('')} aria-label="Dismiss"><X size={14} /></button></div>}
    </div>
  );
}

export default App;
