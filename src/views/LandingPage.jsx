import modelApp from "../icons/landing_page/model_app.svg";
import Navbar from "../components/Navbar";
import modelPeopleShared from "../icons/landing_page/model_people_shared.svg";
import modelChat from "../icons/landing_page/model_chat.svg";
import { useNavigate } from "react-router";
import Button from "../components/Button";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Navbar>
          <Button label={"Se connecter"} onClick={() => navigate("/auth/login")} customClass="w-32 hover:bg-zinc-600"/>
          <Button label={"S'inscrire"} onClick={() => navigate("/auth/register")} customClass="w-32 bg-lime-600 border-lime-400"/>
      </Navbar>
      <div className="w-full flex flex-col pt-24">
        <div className="w-full flex sm:flex-row flex-col my-8 sm:my-24">
          <div className="w-full sm:w-1/2 sm:text-left text-center flex flex-col">
            <h1 className="mx-8 sm:mx-24 text-slate-900 text-3xl sm:text-5xl mt-8 sm:mt-24 mb-4 sm:mb-10 font-semibold">
              Une plateforme de mentoring.
            </h1>
            <p className="mx-8 sm:mx-24">
              Une plateforme web de mentoring qui vise à créer une interface en
              ligne qui permettra aux filleuls de trouver leurs mentors et
              communiquer avec eux de manière efficace. Le systême fourni un
              véritable canal de suivi pour faciliter le mentorat
            </p>
          </div>
          <img
            className="w-full sm:w-1/2"
            src={modelApp}
            alt="icone blogging ymentors"
          />
        </div>
        <hr className="w-3/4 mx-auto h-full sm:hidden block primary-border" />
        <div className="flex sm:flex-row flex-col-reverse my-8 sm:my-24">
          <img
            className="w-full sm:w-1/2"
            src={modelPeopleShared}
            alt="icone blogging ymentors"
          />
          <div className="w-full sm:w-1/2 sm:text-left text-center flex flex-col">
            <h1 className="mx-8 sm:mx-24 text-slate-900 text-3xl sm:text-5xl mt-8 sm:mt-24 mb-4 sm:mb-10 font-semibold">
              En total sécurité.
            </h1>
            <p className="mx-8 sm:mx-24">
              Une plateforme proposant une utilisation des plus confortables
              pour les utilisateur. Une messagerie efficace, à la portée de
              toutes et tous.
            </p>
          </div>
        </div>
        <hr className="w-3/4 mx-auto h-full sm:hidden block primary-border" />
        <div className="flex sm:flex-row flex-col my-8 sm:my-24">
          <div className="w-full sm:w-1/2 sm:text-left text-center flex flex-col">
            <h1 className="mx-8 sm:mx-24 text-slate-900 text-3xl sm:text-5xl mt-8 sm:mt-24 mb-4 sm:mb-10 font-semibold">
              Partagez !
            </h1>
            <p className="mx-8 sm:mx-24">
              Faîtes vos rencontres, partagez vos connaissances apprenez des
              autres et évoluez.
            </p>
          </div>
          <img
            className="w-full sm:w-1/2"
            src={modelChat}
            alt="icone blogging ymentors"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
