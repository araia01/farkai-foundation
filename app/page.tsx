
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Menu,
  X,
  Target,
  Eye,
  CalendarDays,
  MapPin,
  Accessibility,
  HandHeart,
  Shirt,
  Users,
  Utensils,
  Images,
  Phone,
  MessageCircle,
  Handshake,
  Gift,
  Music2,
  Mail,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about", children: [
    { label: "Who We Are", href: "#about" },
    { label: "Mission & Vision", href: "#mission-vision" },
    { label: "Meet Our Founder", href: "#founder" },
  ] },
  { label: "Our Work", href: "#work", children: [
    { label: "Areas of Focus", href: "#work" },
    { label: "Community Impact", href: "#impact" },
    { label: "Photo Gallery", href: "#gallery" },
  ] },
  { label: "Get Involved", href: "#involved" },
  { label: "Contact", href: "#contact" },
];

const primaryPhone = "+23233281662";
const secondaryPhone = "+23275617119";

function whatsappLink(message: string, phone = primaryPhone) {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

const focusAreas = [
  {
    icon: Accessibility,
    number: "01",
    title: "Disability Inclusion",
    description:
      "Supporting people living with disabilities through practical assistance, dignity, inclusion, and opportunities for greater independence.",
  },
  {
    icon: HandHeart,
    number: "02",
    title: "Vulnerable Children",
    description:
      "Providing support to orphans and vulnerable children through charitable assistance, essential supplies, and initiatives that promote their welfare.",
  },
  {
    icon: Utensils,
    number: "03",
    title: "Essential Needs",
    description:
      "Helping vulnerable individuals and families access food, clothing, and other essential items through community-based charitable outreach.",
  },
  {
    icon: Users,
    number: "04",
    title: "Community Empowerment",
    description:
      "Encouraging youth participation, volunteering, community development, and future skills-building opportunities.",
  },
];

const galleryImages = [
  {
    src: "/images/donation.jpg",
    alt: "Farkai Foundation charitable donation activity",
    title: "Giving With Compassion",
    category: "CHARITABLE OUTREACH",
  },
  {
    src: "/images/outreach.jpg",
    alt: "Farkai Foundation volunteers with community members",
    title: "Standing Together",
    category: "COMMUNITY ENGAGEMENT",
  },
  {
    src: "/images/community.jpg",
    alt: "Farkai Foundation members engaging with the community",
    title: "Building Connections",
    category: "COMMUNITY SUPPORT",
  },
  {
    src: "/images/team.jpg",
    alt: "Farkai Foundation team holding their foundation banner",
    title: "United For A Cause",
    category: "OUR VOLUNTEERS",
  },
];

const involvementOptions = [
  {
    icon: Gift,
    number: "01",
    title: "Make a Donation",
    description:
      "Your generosity can help provide food, clothing, educational materials, and other essential support to vulnerable individuals and families.",
    action: "Enquire About Donating",
    message:
      "Hello Farkai Foundation, I would like to enquire about making a donation to support your charitable activities.",
  },
  {
    icon: HandHeart,
    number: "02",
    title: "Become a Volunteer",
    description:
      "Share your time, skills, and compassion. Join our efforts to support vulnerable communities and make a meaningful difference.",
    action: "Become a Volunteer",
    message:
      "Hello Farkai Foundation, I am interested in volunteering with your foundation. Could you please provide more information?",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Partner With Us",
    description:
      "We welcome collaboration with businesses, institutions, organizations, and individuals who share our commitment to community development.",
    action: "Explore Partnership",
    message:
      "Hello Farkai Foundation, I would like to discuss a potential partnership or collaboration with your organization.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [desktopExpanded, setDesktopExpanded] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <main>
      {/* NAVIGATION */}
      <header className="site-header">
        <div className="nav-container">
          <a href="#" className="brand">
            <Image
              src="/images/logo.jpg"
              alt="Farkai Foundation logo"
              width={55}
              height={55}
              className="brand-logo"
              priority
            />
            <div className="brand-text">
              <span className="brand-name">FARKAI FOUNDATION</span>
              <span className="brand-location">SIERRA LEONE</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <div className="nav-dropdown" key={item.label}
                onMouseEnter={() => setDesktopExpanded(item.children ? item.label : null)}
                onMouseLeave={() => setDesktopExpanded(null)}>
                <div className="nav-dropdown-trigger">
                  <a href={item.href} onClick={() => setDesktopExpanded(null)}>{item.label}</a>
                  {item.children && (
                    <button type="button" className="nav-dropdown-toggle"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={desktopExpanded === item.label}
                      onClick={() => setDesktopExpanded(desktopExpanded === item.label ? null : item.label)}>
                      <ChevronDown size={15} />
                    </button>
                  )}
                </div>
                {item.children && desktopExpanded === item.label && (
                  <div className="nav-dropdown-menu">
                    {item.children.map((child) => (
                      <a key={child.href} href={child.href}
                        onClick={() => setDesktopExpanded(null)}>{child.label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <a href="#involved" className="nav-donate">
            <Heart size={17} />
            Support Our Mission
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <div className="mobile-nav-group" key={item.label}>
                <div className="mobile-nav-row">
                  <a href={item.href} onClick={() => { setMenuOpen(false); setMobileExpanded(null); }}>
                    {item.label}
                  </a>
                  {item.children && (
                    <button type="button" className="mobile-submenu-toggle"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={mobileExpanded === item.label}
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}>
                      <ChevronDown size={19} />
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div className="mobile-submenu">
                    {item.children.map((child) => (
                      <a key={child.href} href={child.href}
                        onClick={() => { setMenuOpen(false); setMobileExpanded(null); }}>
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#involved"
              className="mobile-donate"
              onClick={() => setMenuOpen(false)}
            >
              <Heart size={18} />
              Support Our Mission
            </a>
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <Image
          src="/images/team.jpg"
          alt="Farkai Foundation volunteers during community outreach"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            COMPASSION IN ACTION SINCE 2023
          </div>

          <h1>
            Empowering Lives.
            <br />
            <span>Building Hope.</span>
          </h1>

          <p className="hero-description">
            Together, we can create a brighter future for vulnerable
            children, people living with disabilities, and less
            privileged communities across Sierra Leone.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="primary-button">
              Discover Our Mission
              <ArrowRight size={19} />
            </a>
            <a href="#involved" className="secondary-button">
              Get Involved
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>FARKAI FOUNDATION SIERRA LEONE</span>
          <span>HELPING THE POOR IS OUR PRIORITY</span>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="about-section">
        <div className="about-container">
          <div id="about" className="about-intro">
            <div className="about-heading">
              <span className="section-label">WHO WE ARE</span>
              <h2>
                Compassion That
                <br />
                <span>Creates Change.</span>
              </h2>
            </div>

            <div className="about-description">
              <p>
                Farkai Foundation Sierra Leone is a charitable,
                community-focused initiative founded on 24 February
                2023 by Mr. Samuel Santigi Kargbo.
              </p>
              <p>
                We are committed to supporting vulnerable individuals,
                people living with disabilities, orphans, vulnerable
                children, and less privileged members of society.
              </p>
              <p>
                Through charitable donations, community outreach,
                empowerment initiatives, and partnerships, we seek
                to improve lives and promote dignity, inclusion,
                and equal opportunities.
              </p>
            </div>
          </div>

          <div className="about-divider" />

          <div id="mission-vision" className="mission-vision-grid">
            <div className="purpose-card">
              <div className="purpose-icon">
                <Target size={27} strokeWidth={1.8} />
              </div>
              <span className="purpose-number">01 / OUR PURPOSE</span>
              <h3>Our Mission</h3>
              <p>
                To improve the lives of less privileged individuals,
                orphans, vulnerable children, and people living with
                disabilities through charitable assistance, community
                development, empowerment, and inclusive opportunities.
              </p>
            </div>

            <div className="purpose-card">
              <div className="purpose-icon">
                <Eye size={27} strokeWidth={1.8} />
              </div>
              <span className="purpose-number">02 / OUR FUTURE</span>
              <h3>Our Vision</h3>
              <p>
                To build a compassionate and inclusive Sierra Leone
                where vulnerable people have access to support,
                opportunities, and resources that enable them to
                live with dignity, hope, and independence.
              </p>
            </div>
          </div>

          <div className="foundation-quote">
            <span className="quote-mark">“</span>
            <p>
              We believe that every individual deserves compassion,
              respect, and an opportunity to build a better future.
            </p>
            <span className="quote-source">
              THE FARKAI FOUNDATION BELIEF
            </span>
          </div>
        </div>
      </section>

      {/* MEET OUR FOUNDER */}
      <section className="founder-section">
        <div id="founder" className="founder-container">
          <div className="founder-image-wrapper">
            <Image
              src="/images/founder.jpg"
              alt="Mr. Samuel Santigi Kargbo, founder of Farkai Foundation Sierra Leone"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="founder-image"
            />
            <div className="founder-image-label">
              <span>FOUNDER & VISIONARY</span>
              <strong>Samuel Santigi Kargbo</strong>
            </div>
          </div>

          <div className="founder-content">
            <span className="section-label">
              THE PERSON BEHIND THE VISION
            </span>
            <h2>
              Meet Our
              <br />
              <span>Founder.</span>
            </h2>

            <div className="founder-name">
              <h3>Mr. Samuel Santigi Kargbo</h3>
              <span>Founder, Farkai Foundation Sierra Leone</span>
            </div>

            <p>
              Motivated by a commitment to community service and
              social responsibility, Mr. Samuel Santigi Kargbo
              established Farkai Foundation Sierra Leone on
              24 February 2023.
            </p>
            <p>
              His vision is to develop an organization that combines
              immediate charitable assistance with long-term
              empowerment, community participation, and partnerships
              that create meaningful opportunities for those in need.
            </p>
            <p>
              Under his leadership, the foundation continues to
              pursue its mission of building hope, promoting
              inclusion, and contributing to the well-being of
              vulnerable communities.
            </p>

            <div className="founder-details">
              <div className="founder-detail">
                <CalendarDays size={19} />
                <span>Established 24 February 2023</span>
              </div>
              <div className="founder-detail">
                <MapPin size={19} />
                <span>Sierra Leone, West Africa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section className="work-section">
        <div id="work" className="work-container">
          <div className="work-heading">
            <div>
              <span className="section-label">WHAT WE STAND FOR</span>
              <h2>
                Our Areas
                <br />
                <span>of Focus.</span>
              </h2>
            </div>
            <p>
              Our work is guided by a commitment to compassion,
              inclusion, and practical support for individuals
              and communities facing difficult circumstances.
            </p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div className="focus-card" key={area.number}>
                  <div className="focus-card-top">
                    <div className="focus-icon">
                      <Icon size={27} strokeWidth={1.7} />
                    </div>
                    <span className="focus-number">{area.number}</span>
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="impact-section">
        <div id="impact" className="impact-container">
          <div className="impact-intro">
            <span className="section-label">COMPASSION IN ACTION</span>
            <h2>
              Making a Difference,
              <br />
              <span>One Act at a Time.</span>
            </h2>
            <p>
              At Farkai Foundation, we believe that meaningful change
              begins with simple acts of kindness. Our charitable
              activities have included food assistance for people
              living with disabilities at 119 Pademba Road, clothing
              donations for children, and community engagement
              to better understand local needs.
            </p>
          </div>

          <div className="impact-highlights">
            <div className="impact-highlight">
              <div className="impact-highlight-icon">
                <Utensils size={22} />
              </div>
              <div>
                <h3>Food Assistance</h3>
                <p>
                  Supporting people living with disabilities
                  through food donations.
                </p>
              </div>
            </div>

            <div className="impact-highlight">
              <div className="impact-highlight-icon">
                <Shirt size={22} />
              </div>
              <div>
                <h3>Clothing Donations</h3>
                <p>
                  Providing clothing to children within
                  the communities we serve.
                </p>
              </div>
            </div>

            <div className="impact-highlight">
              <div className="impact-highlight-icon">
                <Users size={22} />
              </div>
              <div>
                <h3>Community Engagement</h3>
                <p>
                  Connecting with communities to understand
                  needs and identify opportunities for support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTREACH GALLERY */}
      <section className="gallery-section">
        <div id="gallery" className="gallery-container">
          <div className="gallery-heading">
            <div>
              <span className="section-label">MOMENTS THAT MATTER</span>
              <h2>
                Our Community
                <br />
                <span>In Pictures.</span>
              </h2>
            </div>
            <p>
              A glimpse into the people, moments, and acts of
              compassion that reflect our foundation&apos;s mission.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                className="gallery-item"
                onClick={() => setSelectedImage(index)}
                aria-label={`View ${photo.title} photograph`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <span>{photo.category}</span>
                  <h3>{photo.title}</h3>
                </div>
                <div className="gallery-expand">
                  <Images size={19} />
                </div>
              </button>
            ))}
          </div>

          <div className="gallery-footer">
            <Heart size={18} />
            <span>
              Every act of kindness helps build a stronger community.
            </span>
          </div>
        </div>
      </section>

      {/* PHOTO VIEWER */}
      {selectedImage !== null && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Community outreach photograph"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="gallery-modal-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close photograph"
          >
            <X size={25} />
          </button>

          <div
            className="gallery-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={1200}
              height={900}
              className="gallery-modal-image"
            />
            <p>{galleryImages[selectedImage].title}</p>
          </div>
        </div>
      )}

      {/* GET INVOLVED */}
      <section className="involved-section">
        <div className="involved-container">
          <div id="involved" className="involved-heading">
            <span className="section-label">BE PART OF THE CHANGE</span>
            <h2>
              Together, We Can
              <br />
              <span>Make a Difference.</span>
            </h2>
            <p>
              Meaningful change happens when people come together.
              Whether through donations, volunteering, or partnerships,
              your support can help us reach more vulnerable communities.
            </p>
          </div>

          <div className="involved-grid">
            {involvementOptions.map((option) => {
              const Icon = option.icon;

              return (
                <div id={option.number === "01" ? "donate" : option.number === "02" ? "volunteer" : "partner"} className="involved-card" key={option.number}>
                  <div className="involved-card-top">
                    <div className="involved-icon">
                      <Icon size={27} strokeWidth={1.7} />
                    </div>
                    <span>{option.number}</span>
                  </div>

                  <h3>{option.title}</h3>
                  <p>{option.description}</p>

                  <a
                    href={whatsappLink(option.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="involved-card-link"
                  >
                    {option.action}
                    <ArrowRight size={18} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-icon">
            <Heart size={27} />
          </div>

          <span className="cta-eyebrow">EVERY CONTRIBUTION MATTERS</span>

          <h2>
            Small Acts of Kindness.
            <br />
            <span>Lasting Impact.</span>
          </h2>

          <p>
            Your support can help us continue reaching people in need,
            promoting inclusion, and building hope within our communities.
          </p>

          <a
            href={whatsappLink(
              "Hello Farkai Foundation, I would like to learn how I can support your mission."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            <Heart size={18} />
            Support Our Mission
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CONTACT US */}
      <section className="contact-section">
        <div id="contact" className="contact-container">
          <div className="contact-intro">
            <span className="section-label">LET&apos;S CONNECT</span>

            <h2>
              Get in
              <br />
              <span>Touch.</span>
            </h2>

            <p>
              Have a question, want to volunteer, or interested in
              supporting our foundation? We would love to hear from you.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Phone size={21} />
                </div>
                <div>
                  <span>PHONE NUMBERS</span>
                  <a href={`tel:${primaryPhone}`}>+232 33 281 662</a>
                  <a href={`tel:${secondaryPhone}`}>+232 75 617 119</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPin size={21} />
                </div>
                <div>
                  <span>LOCATION</span>
                  <strong>Sierra Leone, West Africa</strong>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Music2 size={21} />
                </div>
                <div>
                  <span>FOLLOW OUR JOURNEY</span>
                  <a
                    href="https://www.tiktok.com/@thefarkaifoundationsl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @thefarkaifoundationsl
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-panel">
            <div className="contact-panel-header">
              <div className="contact-panel-icon">
                <MessageCircle size={26} />
              </div>

              <h3>Let&apos;s Start a Conversation</h3>
              <p>
                Reach out to our team through WhatsApp for
                donations, volunteering, partnerships, or general enquiries.
              </p>
            </div>

            <a
              href={whatsappLink(
                "Hello Farkai Foundation, I would like to make an enquiry about your foundation."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-primary"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
              <ArrowRight size={18} />
            </a>

            <a
              href={whatsappLink(
                "Hello Farkai Foundation, I would like to make an enquiry.",
                secondaryPhone
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-secondary"
            >
              Contact Our Second Number
              <ChevronRight size={18} />
            </a>

            <div className="contact-panel-divider" />

            <div className="contact-panel-note">
              <Mail size={20} />
              <p>
                Official email enquiries will be available
                once the foundation&apos;s email address is confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand-column">
              <a href="#" className="footer-brand">
                <Image
                  src="/images/logo.jpg"
                  alt="Farkai Foundation logo"
                  width={62}
                  height={62}
                  className="footer-logo"
                />
                <div>
                  <strong>FARKAI FOUNDATION</strong>
                  <span>SIERRA LEONE</span>
                </div>
              </a>

              <p>
                Empowering the less privileged, building hope,
                and transforming lives through compassion,
                inclusion, and community service.
              </p>

              <span className="footer-motto">
                Helping the poor is our priority.
              </span>
            </div>

            <div className="footer-links-column">
              <h3>Quick Links</h3>
              {navigation.map((item) => (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="footer-links-column">
              <h3>Get Involved</h3>
              <a href="#involved">Make a Donation</a>
              <a href="#involved">Volunteer</a>
              <a href="#involved">Become a Partner</a>
              <a href="#work">Our Community Work</a>
            </div>

            <div className="footer-contact-column">
              <h3>Contact Us</h3>

              <a href={`tel:${primaryPhone}`}>
                <Phone size={16} />
                +232 33 281 662
              </a>

              <a href={`tel:${secondaryPhone}`}>
                <Phone size={16} />
                +232 75 617 119
              </a>

              <span>
                <MapPin size={16} />
                Sierra Leone
              </span>

              <a
                href="https://www.tiktok.com/@thefarkaifoundationsl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Music2 size={16} />
                TikTok
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © 2026 Farkai Foundation Sierra Leone.
All rights reserved.
            </span>

            <span>
              Founded 24 February 2023
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
