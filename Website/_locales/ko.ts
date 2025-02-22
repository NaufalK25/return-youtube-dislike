import { ko } from "vuetify/src/locale";
//libaraldev
export default {
  ...ko,
  home: {
    name: "홈",
    title: "Return YouTube Dislike",
    subtitle: "유튜브에서 싫어요를 표시해주는 브라우저 확장 프로그램 및 API",
    ukraine: "우크라이나 지원",
    sponsors: "스폰서",
  },
  install: {
    name: "설치",
    title: "플랫폼 선택",
    subtitle: "파이어폭스와 모든 크로미엄 기반 브라우저에서 사용 가능",
    title2: "다른 플랫폼",
    subtitle2:
      "당신의 브라우저가 아직 지원하지 않는 경우, 이 유저스크립트를 시도할 수 있습니다",
    title3: "서드파티 구현",
    subtitle3: "우리 측의 책임이 없으며, 사용자의 책임하에 사용하십시오",
  },
  api: {
    name: "API",
    title: "공식 RYD 문서에 오신 것을 환영합니다!",
    subtitle: "시작하려면 메뉴에서 섹션을 선택하세요.",
    rights: {
      title: "사용 권한",
      subtitle:
        "이 오픈 API의 제 3자 사용은 다음 제한 사항들과 함꼐 허용됩니다:",
      bullet1: "저작자 표시: ",
      bullet1text:
        "이 프로젝트의 사용자는 저장소 또는 returnyoutubedislike.com에 대한 링크와 함께 명확하게 저자를 표기해야 합니다.",
      bullet2: "속도 제한: ",
      bullet2text:
        "하나의 클라이언트당 분당 100개와 하루당 10,000개의 요청 제한이 있습니다. 당신의 애플리케이션이 이를 초과할 경우 429 상태 코드를 반환할 것입니다.",
    },
    url: {
      title: "URL 정보",
      subtitle: "API는 다음 베이스 URL을 통해 액세스할 수 있습니다.: ",
    },
    endpoints: {
      title: "사용 가능한 엔드포인트",
      subtitle: "사용 가능한 엔드포인트 리스트는 여기에서 사용 가능합니다: ",
    },
    fetching: {
      title: "기본 Fetching 튜토리얼",
      subtitle: "주어진 유튜브 영상 ID에 대한 투표 수를 가져오는 예시: ",
      title2: "요청 예시: ",
      url: "요청 URL: ",
      method: "요청 메소드: ",
      headers: "헤더: ",
      response: "응답: ",
      error1:
        '유효하지 않은 유튜브 ID는 상태 코드 404 "Not Found"를 리턴합니다',
      error2: '잘못된 포멧의 유튜브 ID는 400 "Bad Request"를 리턴합니다',
    },
  },
  help: {
    name: "도움말",
    title: "트러블슈팅",
    bullet1: "지금 최신 버전이 설치되어 있는지 확인하세요. ",
    bullet11: "버전이 현재 최신 버전입니다.",
    bullet2:
      "확장 프로그램을 제거하고 재설치한 다음, 브라우저를 재시작 하세요(모든 활성 창을 말하며, 단지 하나의 탭을 말하는 것이 아닙니다)",
    bullet3: "이 링크가 열리는지 확인하세요: ",
    bullet31: "평문이 표시되어야 합니다: ",
    bullet4:
      "위의 내용이 도움이 되지 않는 경우, 우리의 디스코드에서 다음과 같은 채널에서 당신의 문제를 보고하세요.",
    bullet41: "디스코드: ",
    bullet4a: "운영체제, 브라우저 이름과 브라우저 버전을 우리한테 말해주세요",
    bullet4b:
      "콘솔창과 함께 문제가 된 페이지(예시: 유튜브 영상 페이지)의 스크린샷을 찍으세요.(",
    bullet4b1: "키를 누르세요) 아래는 스크린샷의 예시입니다.",
    bullet4c:
      "확장 브로그램이 설치된 당신의 브라우저의 확장 프로그램 페이지의 스크린샷을 촬영하세요.",
    bullet4c1: "확장 프로그램들을 보려면 이것을 주소창에 입력하세요",
    firefox: ": 파이어폭스의 경우",
    chrome: ": 크롬, 엣지, 브레이브, 오페라, 그리고 비발디의 경우",
  },
  faq: {
    name: "FAQ",
    title: "자주 묻는 질문",
    subtitle:
      "여전히 의문점이 있으신가요? 우리의 디스코드에 무료로 가입하세요!",
    bullet1: "확장 프로그램은 어디에서 데이터를 가져옵니까?",
    bullet1text:
      "공식 유튜브 싫어요 API가 닫히기 전에 보환된 데이터와 확장 프로그램 사용자 행동을 추정한 값의 조합입니다",
    bullet2: "왜 싫어요 수가 업데이트 되지 않는거죠?",
    bullet2text:
      "현재 동영상 싫어요는 캐시되며 자주 업데이트 되지는 않습니다. 동영상의 인기도에 따라 다르지만, 업데이트되는 데 몇 시간에서 며칠이 걸릴 수 있습니다.",
    bullet3: "어떻게 작동합니까?",
    bullet3text:
      "확장 프로그램은 시청 중인 동영상의 동영상 ID를 수집하며, 우리의 API를 사용하여 싫어요 수(및 조회수, 좋아요 등과 같은 기타 필드)를 가져옵니다. 그런 다음 확장 프로그램은 싫어요 수와 비율을 페이지에 표시합니다. 당신이 비디오에 좋아요나 싫어요를 할 경우, 그것은 기록되고 데이터베이스로 전송되어 정확한 싫어요 수를 추정할 수 있습니다.",
    bullet4: "저의 싫어요 수를 공유할 수 있나요?",
    bullet4text:
      "곧 출시됩니다. 우리는 크리에이터가 검증이 된 싫어요 수를 공유할 수 있도록 Oauth 또는 제한된 범위의 다른 읽기 전용 API를 사용하는 방법을 검토하고 있습니다",
    bullet5: "어떤 데이터를 수집하고 어떻게 처리합니까?",
    bullet5text:
      '확장 프로그램은 제대로 작동하기 위해서 IP 주소 또는 당신이 본 영상의 ID 같은 순전히 필수적인 데이터만 수집합니다. 귀하의 데이터는 3자한테 판매되지 않습니다. 귀하가 우리가 어떻게 개인정보와 보안을 처리하는지 알고 싶다면 우리의 <a href="https://github.com/Anarios/return-youtube-dislike/blob/main/Docs/SECURITY-FAQ.md">보안 FAQ</a>를 확인하세요.',
    bullet6: "API/백엔드는 어떻게 작동하나요?",
    bullet6text:
      "백엔드는 유튜브 api가 여전히 싫어요 수를 반환할 때의 싫어요 수, 확장기능 사용자들의 좋아요/싫어요 수와 추정치로부터 보관된 데이터를 사용합니다. 가까운 미래에는 콘텐츠 제작자가 쉽고 안전하게 싫어요 수를 제출할 수 있게 될 것이며 우리는 ArchiveTeam의 보관 데이터(45억 6천만 동영상)를 현재 데이터베이스에 추가할 것입니다. 주제에 대한 비디오를 볼 수도 있습니다.",
    bullet7: "싫어요 수에 '싫어요 비활성화됨'이 왜 표시됩니까?",
    bullet7text:
      "때때로 최근에 업로드한 동영상은 제작자가 비활성화하지 않았더라도 '싫어요 비활성화됨'으로 표시될 수 있습니다. 이는 싫어요가 비활성화되어 있는지 감지하는 방법 때문입니다. 몇 시간 내에 동영상에 좋아요 또는 싫어요 표시를 하거나 페이지를 새로고침을 하면(희망 사항) 사라집니다.",
  },
  donate: {
    name: "기부",
    subtitle:
      "기부를 통해 인터넷의 자유를 유지하려는 우리의 노력을 지원할 수 있습니다!",
  },
  links: {
    name: "링크",
    title: "프로젝트 링크",
    subtitle: "프로젝트와 개발자들로 향하는 링크",
    contact: "문의하기",
    translators: "번역가들",
    coolProjects: "Cool Projects",
    sponsorBlockDescription: "동영상에 포함된 광고 건너뛰기",
    filmotDescription: "자막으로 유튜브 동영상 검색",
  },
};
