import './App.css';

export default function App() {
  const placeholder = 'Your message';

  return (
    <div>
      <input type="text" placeholder="Your first name" />

      <input type="number" placeholder="Your fav number" />

      <input type="text" placeholder={placeholder} />

      <input
        type="text"
        placeholder={
          'hi'.length === 2
            ? 'My placeholder'
            : 'Your placeholder'
        }
      />
    </div>
  );
}
