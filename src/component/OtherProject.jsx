import Carousel from "./carousel";
import SectionHeading from "./SectionHeading";

const OtherProject = () => {
    const projects = [
        {
            image: "https://res.cloudinary.com/ddjnrebkn/image/upload/v1746184606/all%20folder/980dd90941d61c4621dddd90073b3f416be2f4ce_vs2nsn.jpg",
            alt: "Investment App",
            // caption: 'Make investment smooth as breeze',
        },
        {
            image: "https://res.cloudinary.com/ddjnrebkn/image/upload/v1746184599/all%20folder/6777d050caf0cc9bdaa60c54b2498900f54e598d_otgyjy.jpg",
            alt: "Payment Platform",
            // caption: 'Make payment smooth as breeze',
        },
        {
            image: "https://res.cloudinary.com/ddjnrebkn/image/upload/v1746184580/all%20folder/a48d54c848aab8e9403c36955f960ed01ee938a0_pnhspn.jpg",
            alt: "Corporate Card Website",
            // caption: 'Corporate card that makes your life easier',
        },
    ];

    const OPTIONS = { align: "start", loop: true };
    const SLIDES = [...projects, ...projects];

    return (
        <section id="work" className="py-[5rem] space-y-[6rem] relative isolate">
            <div className="w-contain">
                <SectionHeading index="03/" heading="RECENT PROJECTS" />
            </div>

            <Carousel slides={SLIDES} options={OPTIONS} />
        </section>
    );
};

export default OtherProject;
