import Navbar from "./Navbar";
import "../css/Navbar.css"
function Projects() {
  return (
    <div className="fade-in">
      <Navbar />
      <div className="grid grid-cols-3 gap-6 m-[60px] text-center justify-center">
        <a
          href="https://github.com/SarayutBz/FWHUB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-blue-400 text-[20px] text-white font-bold flex items-center justify-center h-[150px] hover:bg-blue-300  rounded-lg">
            FWHUB
          </div>
        </a>
        <a
          href="https://github.com/SarayutBz/eCommerceMarket"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-yellow-400 text-[20px] font-bold text-white flex items-center justify-center h-[150px] rounded-lg hover:bg-yellow-300">
            eCommerceMarket
          </div>
        </a>
        <a
          href="https://github.com/SarayutBz/AWS_Transribe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-purple-400 text-[20px] font-bold text-white flex items-center justify-center h-[150px] rounded-lg hover:bg-purple-300">
            AWS Transribe
          </div>
        </a>
      </div>
    </div>
  );
}
export default Projects;
