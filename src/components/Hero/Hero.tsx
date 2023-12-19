import illustrationIntro from '../../assets/illustration-intro.svg';

const Hero = () => {
  return (
    <section className='padding-block-900'>
      <div className="container">
        <div className="even-columns">
          <div>
            <h1 className="font-size-primary-heading font-weight-bold">Bring everyone together to build better products.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente architecto porro, eos, possimus, quisquam cum eaque rem molestias esse vel?</p>
            <button className="button">Get Started</button>
          </div>
          <div>
            <img src={illustrationIntro} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
