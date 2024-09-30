import avatar from "../assets/images/default.avatar.jpg";

const Header = ({ texto, userName }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <h2 className="text-lg lg:text-2xl font-semibold text-gray-700 pl-4 md:pl-6">
        {texto}
      </h2>
      <div className="flex items-center space-x-4 pr-4 md:pr-6">
        <img
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
          src={avatar}
          alt="Usuário"
        />
        <span className="text-gray-700 text-lg lg:text-xl">{userName}</span>
      </div>
    </div>
  );
};

export default Header;
