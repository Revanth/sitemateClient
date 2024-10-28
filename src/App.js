import logo from './logo.svg';
import './App.css';

function App() {

  const apiCall = async(apiName) => {
    const jiraIssue = {'ID': 'Bug001', 'Title': 'Sample Title', 'Description': 'Sample description'}
    try{
      const res = await fetch('http://localhost:3001/sitemate/api/'+apiName)
      console.log('Response:', res)
    }
    catch(e){
      console.log('Api '+ apiName +' error: ' + e)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => apiCall('create')}>Create</button>
        <button onClick={() => apiCall('read')}>Read</button>
        <button onClick={() => apiCall('update')}>Update</button>
        <button onClick={() => apiCall('delete')}>Delete</button>
      </header>
    </div>
  );
}

export default App;
