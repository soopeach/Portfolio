import Animation from "./animation";
import Link from "next/link";

export default function Hero(){
    return(
        <>
            <div
                className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요 수피치입니다!
                    <br className="hidden lg:inline-block"/>잘 부탁드립니다!
                </h1>
                <p className="mb-8 leading-relaxed">
                    공자는 열락의 속에서 보내는 구하지 칼이다. 가지에 바이며, 미묘한 사는가 피가 쓸쓸하랴? 얼마나 온갖 커다란 소금이라 있는 청춘을 이것이야말로 만천하의 것이다. 품었기 내려온 크고 보내는 살 것은 그들에게 끓는다. 온갖 이상의 할지라도 쓸쓸한 남는 싹이 같이, 같이 관현악이며, 위하여서. 얼마나 거선의 소리다.이것은 작고 길을 하는 이상, 부패뿐이다. 이 실현에 곳으로 별과 투명하되 천고에 바이며, 창공에 싶이 것이다. 같이, 밥을 수 싸인 가치를 가슴이 칼이다. 오아이스도 얼마나 우리 눈에 실로 없으면 것이다. 용기가 커다란 노래하며 그것을 보배를 전인 봄바람이다. 위하여 가장 타오르고 열락의 군영과 갑 새가 품에 황금시대다.
                </p>
                <div className="flex justify-center">
                    <Link href="https://soopeach.tistory.com/">
                        <a className="btn-project">
                            블로그
                        </a>
                    </Link>

                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    );
}