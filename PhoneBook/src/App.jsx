import { useState } from "react";
import "./App.css";

const initialData = [
  {
    name: "Jetha Lal C. Gada",
    number: "09876543212",
    img: "https://st1.bollywoodlife.com/wp-content/uploads/2024/04/TMKOC-Jethalal-1.png",
    id: 1,
  },
  {
    name: "Jetha Lal C. Gada",
    number: "09876543212",
    img: "https://st1.bollywoodlife.com/wp-content/uploads/2024/04/TMKOC-Jethalal-1.png",
    id: 2,
  },
  {
    name: "Jetha Lal C. Gada",
    number: "09876543212",
    img: "https://st1.bollywoodlife.com/wp-content/uploads/2024/04/TMKOC-Jethalal-1.png",
    id: 3,
  },
  {
    name: "Jetha Lal C. Gada",
    number: "09876543212",
    img: "https://st1.bollywoodlife.com/wp-content/uploads/2024/04/TMKOC-Jethalal-1.png",
    id: 4,
  },
  {
    name: "Jetha Lal C. Gada",
    number: "09876543212",
    img: "https://st1.bollywoodlife.com/wp-content/uploads/2024/04/TMKOC-Jethalal-1.png",
    id: 5,
  },
];

function App() {
  return (
    <>
      <div className="main-Container">
        PhoneBook
        <ContactList />
      </div>
    </>
  );
}

function ContactList() {
  const [list, setList] = useState(initialData);
  return (
    <>
      <div className="contact_List_Container">
        {list.map((data) => (
          <Contact
            key={data.id}
            name={data.name}
            number={data.number}
            img={data.img}
          />
        ))}
        <AddContactForm />
      </div>
    </>
  );
}
function Contact({ name, number, img }) {
  return (
    <>
      <div className="contact_Container">
        <div className="profile-container">
          <img src={img} alt={name} className="profile" />
        </div>
        <div className="contact-details">
          <p className="contact-Name">{name}</p>
          <p className="contact_Number">{number}</p>
        </div>
      </div>
    </>
  );
}

function AddContactForm() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [img, setImg] = useState(
    "https://st1.bollywoodlife.com/wp-content/uploads/2024/04/TMKOC-Jethalal-1.png"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, number, img });
  };
  return (
    <>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <div
            className="cut"
            onClick={() => {
              setShowForm(false);
            }}
          >
            X
          </div>
          <div className="data">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="data">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Mobile Number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </div>
          <div className="data">
            <label>Add Image</label>
            <input
              type="text"
              placeholder="Add Image"
              value={img}
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
          </div>
          <button className="button">Add Contact</button>
        </form>
      ) : (
        <button
          className="absolute-btn"
          onClick={() => {
            setShowForm(true);
          }}
        >
          +
        </button>
      )}
    </>
  );
}

export default App;
