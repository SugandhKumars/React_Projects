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
    name: "Babita Ji 😘💖👌",
    number: "09876543212",
    img: "https://i.pinimg.com/736x/f8/e8/e7/f8e8e7628f576cb188490666d38da103.jpg",
    id: 5,
  },
  {
    name: "Atmaram T. Bhide",
    number: "09876543212",
    img: "https://static.toiimg.com/thumb/msid-91160476,width-400,resizemode-4/91160476.jpg",
    id: 2,
  },
  {
    name: "Roshan Singh Sodhi",
    number: "09876543212",
    img: "https://images.news18.com/webstories/uploads/2024/05/Taarak-Mehta-Ka-Ooltah-Chashmah-Sodhi-2024-05-9c4381b0aa607cf0a10c222c365a8bef.jpg",
    id: 3,
  },
  {
    name: "Mehta Sahab",
    number: "09876543212",
    img: "https://st1.bollywoodlife.com/wp-content/uploads/2023/03/Taarak-15.png",
    id: 4,
  },
];

function App() {
  return (
    <>
      <div className="main-Container">
        <strong>PhoneBook</strong>
        <ContactList />
      </div>
    </>
  );
}

function ContactList() {
  const [list, setList] = useState(initialData);
  const handlenewData = (newContact) => {
    setList([...list, newContact]);
  };
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
        <AddContactForm onAddContact={handlenewData} />
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

function AddContactForm({ onAddContact }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [img, setImg] = useState(
    "https://st1.bollywoodlife.com/wp-content/uploads/2024/04/TMKOC-Jethalal-1.png"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number || !img) return;
    onAddContact({ name, number, img, id: Math.random() });
    setImg("");
    setName("");
    setNumber("");
    setShowForm(false);
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
              type="number"
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
