import Image from "next/image";
import profilePicture from "./yaty.jpg";

export const dynamicParams = false;

export default function Home() {
  const age = new Date().getFullYear() - 1987;

  return (
    <div className="p-8 pb-20 flex justify-center min-h-screen items-center font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-prose space-y-6 m-auto ">
        <h1 className="text-left w-full font-bold mb-8 text-xl">
          Yaty Karim Paulsson
        </h1>

        <Image
          src={profilePicture}
          alt="Yaty Karim Paulsson"
          width={201}
          height={300}
          className="rounded-sm md:float-right md:!mb-8 md:ml-8"
        />
        <h2 className="text-left w-full">Hej!</h2>
        <p>Det är jag som är Yaty Karim Paulsson. Ni kan kalla mig Yaty!</p>
        <p>
          Jag jobbar som teamledare inom Learning and Development på Bravida.
          Här jobbar jag med vår interna skola som erbjuder kompetensutveckling
          för våra medarbetare. Jag ansvarar primärt för vår Sverige-verksamhet
          men jobbar även med några av våra nordiska program. Bravida är ett
          installationsföretag och har cirka 13000 medarbetare i Sverige, Norge,
          Danmark och Finland.
        </p>
        <p>
          Under mitt yrkesverksamma liv har jag haft lite olika roller där jag
          samlat på mig flera års erfarenhet av projekt- och produktionsledning
          inom kommunikation. Bland annat på varumärkesbyrån Revolution,
          ViacomCBS (MTV, Comedy central, Nickelodeon) samt filmbyrån Prolounge.
          Jag har också jobbat som HR/People manager på SEN Street Kitchen som
          fokuserar på asiatisk street food. Mina fokusområden var rekrytering
          av de ledande rollerna på restaurangerna samt onboarding, utbildning
          och employer branding. Jag älskar att jobba med människor och brinner
          för kompetensutveckling.
        </p>
        <p>
          Är du intresserad av att veta mer om mig? Maila mig på{" "}
          <a className="underline hover:no-underline" href="mailto:yaty@ykp.se">
            yaty@ykp.se
          </a>{" "}
          och/eller connecta med mig på{" "}
          <a
            className="underline hover:no-underline"
            href="https://www.linkedin.com/in/yatypaulsson/"
          >
            LinkedIn
          </a>
          !
        </p>
        <p>
          Jag är {age} år och bor med min man David och våra tre barn i
          stockholmsförort. Min vardag innefattar mycket kaffe, träning,
          matlagning, trädgård, växter ock såklart familjehäng. Kollar tyvärr på
          orimligt många reality-serier när jag får lite tid över.
        </p>
      </main>
    </div>
  );
}
