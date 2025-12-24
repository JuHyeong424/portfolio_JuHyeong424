export default function Article() {
  return (
    <>
      <p className="font-bold xl:text-xl lg:text-base md:text-sm text-xs mt-2">
        &quot;사용자가 헷갈리지 않는 화면이 좋은 서비스입니다.&quot;
      </p>

      <section className="xl:my-3 xl:text-base lg:my-2 lg:text-sm md:text-xs md:my-2 text-[10px] my-0.5">
        <p>
          단순히 빠르게 동작하는 것보다 사용자의 의도가 명확히 반영된 인터랙션을
          중요하게 생각합니다.
        </p>
        <p>
          UI의 문제를 디자인의 영역에 국한하지 않고 사용 경험(UX)의 문제로
          바라보며,
        </p>
        <p>작은 불편함도 직접 써보고 수정하는 개발을 지향합니다.</p>
      </section>
    </>
  );
}
