import contacts from './contacts.json';
import { useState } from 'react';
import './App.css';

  const firstFive = contacts.splice(0,4)

  const addRandom = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIndex];

    return firstFive.push(randomContact);
  }

  const sortByName = () => {
    const sortedByName = firstFive.sort((a, b) => (a.name > b.name ? 1 : -1))
    return sortedByName;
  }

  const sortByPopularity = () => {
    const sortedByPop = firstFive.sort((a, b) => a.popularity - b.popularity)
    return sortedByPop;
  }

  const deleteContact = contactId => {
    const filteredContacts = firstFive.filter(contact => {
      return contact._id !== contactId;
    })
  };



function App() {

  const [contactList, setContactList] = useState(firstFive)

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className='top-buttons'>
        <button onClick={() => setContactList(addRandom)} className="btn-add-random">Add Random Contact</button>
        <button onClick={() => setContactList(sortByName)}>Sort by Name</button>
        <button onClick={() => setContactList(sortByPopularity)}>Sort by Popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {firstFive.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="" height='100px' />
              </td>
              <td>
                <h2>{contact.name}</h2>
              </td>
              <td>
                <p>{contact.popularity}</p>
              </td>
              <td>
                {contact.wonOscar ? <p>🏆</p> : null}
              </td>
              <td>
                {contact.wonEmmy ? <p>🏆</p> : null}
              </td>
              <td>
                <button onClick={() => setContactList(deleteContact)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
