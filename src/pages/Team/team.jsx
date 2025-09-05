import React from "react";
import "./team.css";
import { Link } from "react-router-dom";

const teamMembers = [
  { name: "Nizar Douirek", role: "Founder & CEO", imageUrl: "pro41.jpeg" },
  { name: "Sofian Chellat", role: "CEO", imageUrl: "dv_lottery.jpg" },
  { name: "Harshita Patel", role: "HR", imageUrl: "https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg" },
  { name: "Eleanor Morales", role: "HR", imageUrl: "https://i.pinimg.com/1200x/c2/4e/27/c24e271f2f992fd7e62e8c1e8d9b3e2f.jpg" },
  { name: "Sophia Monic", role: "Product Manager", imageUrl: "https://i.pinimg.com/736x/81/d6/b1/81d6b158728f5fc97ca6e0a025fefee0.jpg" },
  { name: "James Miller", role: "Marketing Lead", imageUrl: "https://i.pinimg.com/736x/9f/46/74/9f4674ca9c17330ab419c1b2f5951d9a.jpg" },
  { name: "Olivia Chen", role: "Lead Developer", imageUrl: "https://i.pinimg.com/736x/57/3c/80/573c80967c9429d0ed0ce32701f85b70.jpg" },
  { name: "Benjamin Carter", role: "UX Designer", imageUrl: "https://i.pinimg.com/736x/b0/c4/21/b0c421e77cf563962026ade82c90dd5b.jpg" },
  { name: "Ava Rodriguez", role: "Data Scientist", imageUrl: "https://i.pinimg.com/736x/ce/31/42/ce3142d7a968fff3aecd0100572a5e8b.jpg" },
  { name: "Lucas Garcia", role: "Backend Engineer", imageUrl: "https://i.pinimg.com/736x/79/63/a5/7963a5246188d408b8f28961a0cf2b90.jpg" },
  { name: "Mia Martinez", role: "Frontend Developer", imageUrl: "https://i.pinimg.com/736x/8e/c1/f8/8ec1f80db272047cedf4c20263114387.jpg" },
  { name: "Henry Wilson", role: "DevOps Engineer", imageUrl: "https://i.pinimg.com/1200x/08/a2/41/08a2413b771b729a9f9df20fa97be52a.jpg" }
];

const TeamMemberCard = ({ member }) => {
  return (
    <div className="team-card">
      <div className="team-photo">
        <img
          src={member.imageUrl}
          alt={member.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/200x200/E2E8F0/4A5568?text=${member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}`;
          }}
        />
      </div>
      <h3 className="team-name">{member.name}</h3>
      <p className="team-role">{member.role}</p>
      <div className="team-socials">
        <a href="#" aria-label="Facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" aria-label="Instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <>
      <div className="contact-header">
        <h1 className="contact-p">Team</h1>
        <p className="contact-p2"><Link to="/Home" className="home-p-contact">Home</Link> / Team</p>
      </div>

      <section className="team-section">
        <div className="team-header">
          <h2 className="contact-p">Our Exceptional Team</h2>
          <p>
            Rencontrez notre équipe exceptionnelle - une synergie de talent, de créativité et de dévouement, créant le succès avec passion et innovation.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
