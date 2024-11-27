import UserList from './components/UserList';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">User Data Collection</h1>
      <div className="w-full max-w-4xl">
        <UserList />
      </div>
    </div>
  );
};

export default Home;
