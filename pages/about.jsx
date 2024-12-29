import { CustomSections } from "../components/common/CustomSections";
import { Question } from "../components/common/Questions";

export default function AboutPage() {
  return (
    <main id="about" className="about">
      <CustomSections
        title="Hello, World!"
        style="main-hero"
        titleType="main-title"
        textColor="red-text"
        bgColor="bg-red"
        imageLink="/images/samina.jpg"
        content="My name is Samina and I just want to make you smile. ʕ•ᴥ•ʔ"
      />
      <section className="about-section">
        <div className="wrapper">
          <div className="content-container">
            <h2 className="yellow-text">About</h2>
            <p className="about-text">
              I am a product manager at{" "}
              <a className="about-link" href="https://thirdweb.com">
                thirdweb
              </a>
              , where I focus on <a className="about-link" href="https://thirdweb.com/contracts">
                smart contracts
              </a> and our AI tooling,<a className="about-link" href="https://thirdweb.com/nebula">
                Nebula
              </a>. I am passionate
              about education and helping others, so I sometimes create technical content. <br />
              <br /> When I am not working, I enjoy playing video games, learning piano, going for a run, practicing hot yoga, and <a className="about-link" href="https://www.goodreads.com/user/show/123932450-samina\">reading</a>."
          </div>
        </div>
      </section>
      <div className="technologies-section">
        <h2 className="green-text">Technologies</h2>
        <div className="tech-logos">
          <svg
            width="86"
            height="120"
            viewBox="0 0 86 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M84.9491 23.5233L77.2235 110.07L42.4966 119.697L7.86551 110.083L0.147949 23.5233H84.9491Z"
              fill="#E44D26"
            />
            <path
              d="M42.5483 112.338L70.6094 104.559L77.2111 30.6007H42.5483V112.338Z"
              fill="#F16529"
            />
            <path
              d="M27.5303 51.8333H42.5486V41.2172H15.9282L16.1822 44.0653L18.7916 73.3207H42.5486V62.7045H28.5006L27.5303 51.8333V51.8333ZM29.923 78.6289H19.266L20.7532 95.2979L42.4997 101.335L42.5486 101.321V90.2759L42.5021 90.2882L30.6789 87.0957L29.923 78.6289Z"
              fill="#EBEBEB"
            />
            <path
              d="M8.0376 0H13.4326V5.33019H18.3679V0H23.7632V16.1412H18.3682V10.7362H13.4329V16.1412H8.03793V0H8.0376ZM30.8575 5.3528H26.1087V0H41.0054V5.3528H36.2536V16.1412H30.8585V5.3528H30.8582H30.8575ZM43.3695 0H48.9948L52.4552 5.67158L55.9123 0H61.54V16.1412H56.1669V8.14072L52.4552 13.8798H52.3621L48.6481 8.14072V16.1412H43.3695V0ZM64.2249 0H69.6215V10.806H77.2084V16.1412H64.2245V0H64.2249Z"
              fill="white"
            />
            <path
              d="M42.5121 73.3207H55.5847L54.3522 87.0891L42.5117 90.2849V101.33L64.2756 95.2979L64.4352 93.5043L66.9302 65.5552L67.1892 62.7045H42.5121V73.3207ZM42.5121 51.8074V51.8333H68.1552L68.3679 49.4473L68.8519 44.0653L69.1055 41.2172H42.5121V51.8077V51.8074Z"
              fill="white"
            />
          </svg>
          <svg
            width="86"
            height="120"
            viewBox="0 0 86 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.4966 119.697L7.86551 110.083L0.147949 23.5233H84.9491L77.2235 110.07L42.4966 119.697V119.697Z"
              fill="#264DE4"
            />
            <path
              d="M70.6094 104.559L77.2111 30.6007H42.5483V112.338L70.6094 104.559V104.559Z"
              fill="#2965F1"
            />
            <path
              d="M17.8402 62.7045L18.7916 73.3207H42.5486V62.7045H17.8402ZM15.9282 41.2172L16.8932 51.8333H42.5486V41.2172H15.9282V41.2172ZM42.5486 90.2759L42.5021 90.2882L30.6789 87.0957L29.923 78.6289H19.266L20.7532 95.2979L42.4997 101.335L42.5486 101.321V90.2759Z"
              fill="#EBEBEB"
            />
            <path
              d="M20.1055 0H32.9631V5.37706H25.4825V10.7541H32.9638V16.1309H20.1055V0ZM35.5349 0H48.3929V4.67568H40.912V5.61075H48.3929V16.3649H35.5353V11.4548H43.0162V10.5198H35.5346V0H35.5349ZM50.9647 0H63.8227V4.67568H56.3418V5.61075H63.8227V16.3649H50.9647V11.4548H58.4456V10.5198H50.9651V0H50.9647Z"
              fill="white"
            />
            <path
              d="M67.1892 62.7045L69.1055 41.2172H42.5121V51.8333H57.4712L56.5052 62.7045H42.5121V73.3207H55.5847L54.3522 87.0891L42.5117 90.2849V101.33L64.2756 95.2979L64.4352 93.5043L66.9302 65.5552L67.1892 62.7045V62.7045Z"
              fill="white"
            />
          </svg>
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_110_118)">
              <path d="M0 0H120V120H0V0Z" fill="#F7DF1E" />
              <path
                d="M31.5527 100.281L40.7355 94.7232C42.5074 97.8643 44.119 100.522 47.9847 100.522C51.6902 100.522 54.0269 99.0727 54.0269 93.4346V55.0918H65.3037V93.594C65.3037 105.274 58.4571 110.59 48.468 110.59C39.4469 110.59 34.2105 105.918 31.5522 100.28M71.4288 99.0722L80.6107 93.7562C83.028 97.7035 86.1696 100.603 91.7271 100.603C96.4001 100.603 99.3794 98.2669 99.3794 95.0447C99.3794 91.1785 96.3185 89.8088 91.1632 87.5541L88.3446 86.3447C80.2085 82.8821 74.8118 78.5321 74.8118 69.3493C74.8118 60.8912 81.2557 54.4468 91.3249 54.4468C98.494 54.4468 103.649 56.9443 107.354 63.4688L98.5737 69.1079C96.6401 65.6443 94.5466 64.2751 91.3244 64.2751C88.0216 64.2751 85.9273 66.3694 85.9273 69.1079C85.9273 72.4908 88.0216 73.861 92.8544 75.9554L95.6735 77.1633C105.259 81.2719 110.656 85.4602 110.656 94.884C110.656 105.034 102.682 110.592 91.9685 110.592C81.4971 110.592 74.7307 105.598 71.4283 99.0727"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_110_118">
                <rect width="120" height="120" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="120"
            height="107"
            viewBox="0 0 120 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.6639 34.605C97.3868 34.1669 96.0989 33.761 94.8014 33.3877C95.0194 32.4971 95.22 31.6172 95.3981 30.7529C98.3222 16.5586 96.4106 5.12348 89.8814 1.35848C83.6212 -2.2509 73.3833 1.5127 63.0436 10.5113C62.0246 11.3997 61.0282 12.3138 60.0553 13.2525C59.404 12.6283 58.7413 12.0162 58.0673 11.4164C47.2308 1.79488 36.3689 -2.26027 29.8467 1.51551C23.5922 5.13613 21.7402 15.886 24.3727 29.3382C24.6346 30.6705 24.9303 31.9959 25.2595 33.3132C23.722 33.75 22.2384 34.215 20.8186 34.71C8.11359 39.1397 0 46.0814 0 53.2819C0 60.7186 8.71031 68.1779 21.9431 72.7008C23.0159 73.066 24.0977 73.4044 25.1873 73.7157C24.8334 75.1344 24.5193 76.5628 24.2452 77.9991C21.7355 91.2179 23.6953 101.714 29.933 105.311C36.3755 109.027 47.1886 105.208 57.7172 96.0043C58.5709 95.256 59.4059 94.4865 60.2213 93.6966C61.2748 94.7131 62.3565 95.7001 63.465 96.6563C73.6641 105.432 83.7366 108.976 89.9681 105.368C96.4045 101.642 98.4966 90.3671 95.7806 76.6491C95.5667 75.5744 95.3268 74.505 95.0611 73.4419C95.8205 73.2169 96.5658 72.9854 97.2923 72.7444C111.049 68.1868 120 60.818 120 53.2819C120 46.0552 111.624 39.0666 98.6639 34.605V34.605ZM95.6803 67.8788C95.0241 68.0958 94.3509 68.3054 93.6647 68.5093C92.1459 63.7013 90.0966 58.5891 87.5883 53.3068C89.9817 48.1505 91.9523 43.1035 93.4284 38.3269C94.6561 38.6822 95.8472 39.0568 96.9956 39.4519C108.1 43.275 114.874 48.9268 114.874 53.2819C114.874 57.9207 107.558 63.9427 95.6803 67.8788V67.8788ZM90.7519 77.6447C91.9528 83.7104 92.1239 89.1947 91.3284 93.4824C90.6141 97.335 89.1769 99.9033 87.3994 100.932C83.618 103.121 75.5306 100.276 66.8086 92.7704C65.7775 91.8813 64.7713 90.9638 63.7912 90.0188C67.1728 86.3208 70.552 82.0219 73.8502 77.2472C79.6514 76.7325 85.132 75.8907 90.1022 74.7418C90.3416 75.7042 90.5582 76.6721 90.7519 77.6447V77.6447ZM40.9106 100.554C37.2159 101.858 34.2731 101.896 32.4942 100.87C28.7091 98.6874 27.1355 90.2597 29.2819 78.9554C29.537 77.6195 29.8292 76.2911 30.158 74.9714C35.0733 76.0589 40.5141 76.8408 46.3289 77.3124C49.6495 81.9844 53.1262 86.2786 56.6302 90.0389C55.8855 90.7595 55.1233 91.4616 54.3441 92.1446C49.688 96.2143 45.0225 99.1018 40.9106 100.554V100.554ZM23.6016 67.8502C17.7502 65.85 12.9178 63.2508 9.60563 60.4144C6.62906 57.8658 5.12672 55.335 5.12672 53.2819C5.12672 48.9122 11.6409 43.3388 22.5061 39.5508C23.8247 39.0914 25.2047 38.6579 26.6367 38.251C28.1386 43.1354 30.1083 48.2424 32.4853 53.4066C30.0773 58.6472 28.0795 63.8358 26.5631 68.7779C25.5685 68.4929 24.581 68.1836 23.6016 67.8502V67.8502ZM29.4038 28.3533C27.1486 16.8282 28.6462 8.13426 32.4155 5.95223C36.4298 3.62817 45.307 6.94176 54.6637 15.2499C55.2739 15.7929 55.8741 16.3469 56.4642 16.9116C52.9777 20.6555 49.5328 24.9179 46.2417 29.5622C40.598 30.0854 35.1956 30.9254 30.2287 32.0508C29.9227 30.8256 29.6476 29.5929 29.4038 28.3538V28.3533ZM81.1664 41.1352C79.9932 39.1088 78.7765 37.1078 77.5172 35.1338C81.3459 35.618 85.0144 36.2607 88.4592 37.0463C87.4252 40.3613 86.1361 43.8268 84.6188 47.3799C83.5097 45.2755 82.3586 43.1936 81.1664 41.1352V41.1352ZM60.0577 20.5754C62.422 23.1371 64.7902 25.9969 67.1194 29.1C62.3944 28.8769 57.6615 28.876 52.9364 29.0972C55.268 26.0227 57.6563 23.1666 60.0577 20.5754ZM38.8134 41.1704C37.6361 43.2122 36.5066 45.2812 35.4258 47.3757C33.9333 43.8352 32.6559 40.3538 31.613 36.9919C35.0367 36.226 38.6878 35.5997 42.4922 35.1244C41.2188 37.1105 39.9922 39.1262 38.8134 41.1699V41.1704ZM42.6014 71.8041C38.6709 71.3654 34.965 70.7715 31.5422 70.0261C32.6016 66.6043 33.907 63.0488 35.4319 59.4324C36.517 61.5284 37.6512 63.5987 38.8336 65.6415C40.0495 67.7415 41.3086 69.7983 42.6014 71.8041ZM60.1992 86.3494C57.7692 83.7282 55.3458 80.828 52.9791 77.709C55.2769 77.799 57.6192 77.8449 60 77.8449C62.4459 77.8449 64.8638 77.79 67.2436 77.6841C64.9069 80.8594 62.5477 83.7638 60.1992 86.3494ZM84.667 59.2477C86.2711 62.9039 87.623 66.4407 88.6964 69.8039C85.2173 70.598 81.4608 71.2374 77.5027 71.7122C78.771 69.7015 79.9992 67.6658 81.1866 65.6063C82.3938 63.5129 83.5542 61.3928 84.667 59.2477V59.2477ZM76.7461 63.045C74.9284 66.2027 73.0084 69.3004 70.9894 72.3333C67.332 72.5924 63.6665 72.721 60 72.7191C56.2655 72.7191 52.6331 72.6029 49.1353 72.376C47.0635 69.3501 45.107 66.247 43.2698 63.0732H43.2703C41.4418 59.9162 39.7339 56.6909 38.1502 53.4043C39.7298 50.1169 41.4326 46.8901 43.2548 43.7307L43.2544 43.7311C45.0759 40.5709 47.0169 37.481 49.073 34.4682C52.6416 34.1982 56.3011 34.0575 59.9995 34.0575H60C63.7153 34.0575 67.3795 34.1996 70.9472 34.4714C72.9825 37.4798 74.9111 40.5591 76.7292 43.7035C78.5575 46.8559 80.2828 50.067 81.9023 53.3316C80.2995 56.6296 78.5796 59.8695 76.7461 63.045V63.045ZM87.3211 5.79942C91.3392 8.11692 92.902 17.4624 90.3773 29.7179C90.2161 30.4997 90.0352 31.2961 89.8383 32.1038C84.8592 30.9544 79.4531 30.0999 73.793 29.5688C70.4958 24.8733 67.0791 20.6044 63.6492 16.9088C64.5481 16.0423 65.4684 15.1983 66.4092 14.3775C75.2686 6.66801 83.5486 3.62395 87.3211 5.79942V5.79942ZM60 42.5663C65.918 42.5663 70.7156 47.3639 70.7156 53.2819C70.7156 59.1999 65.918 63.9975 60 63.9975C54.082 63.9975 49.2844 59.1999 49.2844 53.2819C49.2844 47.3639 54.082 42.5663 60 42.5663V42.5663Z"
              fill="#00D8FF"
            />
          </svg>
        </div>
      </div>
      <div className="faq-section">
        <div className="wrapper">
          <h2 className="blue-text">F.A.Q</h2>
          <div className="faq-container">
            <Question
              number="001"
              question="Where are you from?"
              answer="I am from Afghanistan. I live in the United States. "
            />
            <Question
              number="002"
              question="When did you start programming?"
              answer="I started programming January 2018 with an introductory CS course at my University. My first programming language was technically JavaScript, but through a library called p5.js."
            />
            <Question
              number="003"
              question="What are you currently working on?"
              answer="Learning cryptography. It's pretty cool -- lots of math. Also, Python."
            />
            <Question
              number="004"
              question="Can you teach me how to code?"
              answer={[
                "No, but I have curated a ",
                <a
                  key="test2"
                  href="https://saminacodes.notion.site/Resource-Board-7b8fecc85e024022ac1aaaa6450a4ba9"
                >
                  list of my favorite resources
                </a>,
                " on Notion. Feel free to duplicate it to your notes. ",
              ]}
            />
            <Question
              number="005"
              question="Where is your profile pic from?"
              answer={[
                "It was an art piece I commissioned from my favorite artist, ",
                <a
                  key="test"
                  href="https://twitter.com/YungKhan/status/1583982316820779010?s=20&t=MGGLiBsL8kjQXWn7I1RsTg"
                >
                  YungKhan.
                </a>,
              ]}
            />
            <Question
              number="006"
              question="How can I contact you?"
              answer={[
                "I am intentionally impossible to reach. If you have any inquiries related to thirdweb, please ",
                <a key="test2" href="https://discord.gg/thirdweb">
                  join the official thirdweb discord server.
                </a>,
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
