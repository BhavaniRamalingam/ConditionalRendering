import './App.css';

    const users = [
      { id: '1', firstName: 'Bhavani', lastName: 'Ramalingam' },
      { id: '2', firstName: 'Kavitha', lastName: 'Thangamani' },
    ];
    const users2=[
      {firstName:'Kavitha',lastName:'Thangamani'},{firstName:'Asifa',lastName:'Pradeep'}
    ];
    
    function App() {
      return (
        <div>
          <h1>Hello Guys!</h1>
          <List list={users} />
          {/* <Item item={item} /> */}
        </div>
      );
    }
    
    function List({ list }) {
      if (!list) {
        return null;
      }
    
      return (
        <ul>
          {list.map(item => (
            <Item key={item.id} item={item} />
            
          ))}
        </ul>
      );
    }
    
    function Item({ item }) {
      return (
        <li>
          {item.firstName} {item.lastName}
        </li>
      );
    }



export default App;
