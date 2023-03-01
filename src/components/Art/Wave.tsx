interface IProps {
  className?: string;
}

export function Wave(props: IProps) {
  return (
    <svg className={props.className} viewBox="0 0 1440 255" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-8 20L52.75 26C113.5 32 235 44 356.5 80C478 116 599.5 176 721 164C842.5 152 964 68 1085.5 38C1207 8 1328.5 32 1389.25 44L1450 56V272H1389.25C1328.5 272 1207 272 1085.5 272C964 272 842.5 272 721 272C599.5 272 478 272 356.5 272C235 272 113.5 272 52.75 272H-8V20Z"
        className="fill-red"
        fillOpacity="0.42"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-107 39L-42.5417 45.9286C21.9167 52.8571 150.833 66.7143 279.75 108.286C408.667 149.857 537.583 219.143 666.5 205.286C795.417 191.429 924.333 94.4286 1053.25 59.7857C1182.17 25.1429 1311.08 52.8571 1375.54 66.7143L1440 80.5714V330H1375.54C1311.08 330 1182.17 330 1053.25 330C924.333 330 795.417 330 666.5 330C537.583 330 408.667 330 279.75 330C150.833 330 21.9167 330 -42.5417 330H-107V39Z"
        className="fill-red"
        fillOpacity="0.42"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-8 0L56.7917 7.85714C121.583 15.7143 251.167 31.4286 380.75 78.5714C510.333 125.714 639.917 204.286 769.5 188.571C899.083 172.857 1028.67 62.8571 1158.25 23.5714C1287.83 -15.7143 1417.42 15.7143 1482.21 31.4286L1547 47.1429V330H1482.21C1417.42 330 1287.83 330 1158.25 330C1028.67 330 899.083 330 769.5 330C639.917 330 510.333 330 380.75 330C251.167 330 121.583 330 56.7917 330H-8V0Z"
        className="fill-red"
        fillOpacity="0.42"
      />
    </svg>
  );
}
