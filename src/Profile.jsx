import { useState } from 'react';

function Profile({ name, occupation, funFact, quote }) {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', padding: '24px', backgroundColor: 'white', textAlign: 'center', border: '1px solid brown' }}>
      <h1 style={{ fontSize: '30px', margin: 0 }}>
        {name}
      </h1>
      
      <p style={{ fontSize: '14px', color: 'purple', fontStyle: 'italic', marginBottom: '20px' }}>
        {occupation}
      </p>

      <div style={{ backgroundColor: 'lightgray', padding: '20px', borderRadius: '10%', marginBottom: '20px', textAlign: 'left' }}>
        <h3 style={{ color: 'darkblue' }}>Fun Fact</h3>
        <p style={{ fontSize: '14px' }}>{funFact}</p>
      </div>

      {showQuote && (
        <div style={{ marginBottom: '10px', padding: '12px', backgroundColor: '#f1f2f6', fontStyle: 'italic', fontSize: '14px' }}>
          {quote}
        </div>
      )}

      <button 
        onClick={() => setShowQuote(!showQuote)}
        style={{ width: '100%', padding: '10px', backgroundColor: 'purple', color: 'white' }}
      >
        {showQuote ? 'Hide Quote' : 'Show Quote'}
      </button>

    </div>
  );
}

export default Profile;