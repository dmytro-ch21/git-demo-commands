import { Link, Navigate } from 'react-router';
import Logo from '../../components/Logo.jsx';
import NavButton from '../../components/NavButton.jsx';

function Home() {
  return (
    <>
      <h1 className="text-center mt-5 text-body-secondary fw-bold">
        Uh, I guess you dont have anything to show yet on Home Page?
      </h1>
      <Logo />
      <div className="text-center">
        <NavButton to="/about" text={'> About'} />
        <NavButton to="/demo" text="> Demo" />
        <NavButton to="/contactus" text="> Contact" />
        {/*         New change by other dev */}
        <NavButton to="/newchange" text="> New Change" />
        {/*         New change by third dev */}
        <NavButton to="/thirddev" text="> New Change Third Dev" />
        {/* This should be stashed */}
        <NavButton to="/stashme" text="> Stashme" />
      </div>
    </>
  );
}

export default Home;
