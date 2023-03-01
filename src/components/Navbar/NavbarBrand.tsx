import Link from 'next/link';

export function NavbarBrand() {
  return (
    <Link href="/" className="font-semibold text-xl">
      <svg width="141" height="30" viewBox="0 0 141 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M48.2146 23.36C46.5826 23.36 45.2626 22.992 44.2546 22.256C43.2546 21.512 42.6466 20.464 42.4306 19.112L45.7666 18.608C45.9026 19.216 46.2026 19.692 46.6666 20.036C47.1386 20.38 47.7346 20.552 48.4546 20.552C49.0466 20.552 49.5026 20.44 49.8226 20.216C50.1426 19.984 50.3026 19.664 50.3026 19.256C50.3026 19 50.2386 18.796 50.1106 18.644C49.9826 18.484 49.6946 18.328 49.2466 18.176C48.8066 18.024 48.1186 17.824 47.1826 17.576C46.1266 17.304 45.2826 17 44.6506 16.664C44.0186 16.328 43.5626 15.928 43.2826 15.464C43.0026 14.992 42.8626 14.424 42.8626 13.76C42.8626 12.928 43.0746 12.208 43.4986 11.6C43.9226 10.984 44.5186 10.512 45.2866 10.184C46.0626 9.848 46.9746 9.68 48.0226 9.68C49.0386 9.68 49.9386 9.836 50.7226 10.148C51.5066 10.46 52.1386 10.904 52.6186 11.48C53.1066 12.056 53.4066 12.736 53.5186 13.52L50.1826 14.12C50.1266 13.64 49.9186 13.26 49.5586 12.98C49.1986 12.7 48.7106 12.536 48.0946 12.488C47.4946 12.448 47.0106 12.528 46.6426 12.728C46.2826 12.928 46.1026 13.216 46.1026 13.592C46.1026 13.816 46.1786 14.004 46.3306 14.156C46.4906 14.308 46.8146 14.464 47.3026 14.624C47.7986 14.784 48.5506 14.992 49.5586 15.248C50.5426 15.504 51.3306 15.804 51.9226 16.148C52.5226 16.484 52.9586 16.892 53.2306 17.372C53.5026 17.844 53.6386 18.416 53.6386 19.088C53.6386 20.416 53.1586 21.46 52.1986 22.22C51.2386 22.98 49.9106 23.36 48.2146 23.36ZM56.2516 23L56.2756 5.72H59.5876V16.28L63.9796 10.04H68.0116L63.3316 16.52L68.3236 23H64.0756L59.5876 16.76V23H56.2516Z"
          className='fill-light'
        />
        <path
          d="M74.7738 23.36C73.5818 23.36 72.5378 23.06 71.6418 22.46C70.7458 21.86 70.0458 21.044 69.5418 20.012C69.0458 18.98 68.7978 17.816 68.7978 16.52C68.7978 15.2 69.0498 14.028 69.5538 13.004C70.0658 11.972 70.7818 11.16 71.7018 10.568C72.6218 9.976 73.7018 9.68 74.9418 9.68C76.1738 9.68 77.2098 9.98 78.0498 10.58C78.8898 11.18 79.5258 11.996 79.9578 13.028C80.3898 14.06 80.6058 15.224 80.6058 16.52C80.6058 17.816 80.3858 18.98 79.9458 20.012C79.5138 21.044 78.8658 21.86 78.0018 22.46C77.1378 23.06 76.0618 23.36 74.7738 23.36ZM75.3018 20.456C76.0298 20.456 76.6098 20.292 77.0418 19.964C77.4818 19.636 77.7978 19.176 77.9898 18.584C78.1818 17.992 78.2778 17.304 78.2778 16.52C78.2778 15.736 78.1818 15.048 77.9898 14.456C77.7978 13.864 77.4898 13.404 77.0658 13.076C76.6498 12.748 76.1018 12.584 75.4218 12.584C74.6938 12.584 74.0938 12.764 73.6218 13.124C73.1578 13.476 72.8138 13.952 72.5898 14.552C72.3658 15.144 72.2538 15.8 72.2538 16.52C72.2538 17.248 72.3618 17.912 72.5778 18.512C72.7938 19.104 73.1258 19.576 73.5738 19.928C74.0218 20.28 74.5978 20.456 75.3018 20.456ZM78.2778 23V14.12H77.8698V5.72H81.1578V23H78.2778ZM93.3498 23V16.88C93.3498 16.584 93.3338 16.208 93.3018 15.752C93.2698 15.288 93.1698 14.824 93.0018 14.36C92.8338 13.896 92.5578 13.508 92.1738 13.196C91.7978 12.884 91.2618 12.728 90.5658 12.728C90.2858 12.728 89.9858 12.772 89.6658 12.86C89.3458 12.948 89.0458 13.12 88.7658 13.376C88.4858 13.624 88.2538 13.992 88.0698 14.48C87.8938 14.968 87.8058 15.616 87.8058 16.424L85.9338 15.536C85.9338 14.512 86.1418 13.552 86.5578 12.656C86.9738 11.76 87.5978 11.036 88.4298 10.484C89.2698 9.932 90.3258 9.656 91.5978 9.656C92.6138 9.656 93.4418 9.828 94.0818 10.172C94.7218 10.516 95.2178 10.952 95.5698 11.48C95.9298 12.008 96.1858 12.56 96.3378 13.136C96.4898 13.704 96.5818 14.224 96.6138 14.696C96.6458 15.168 96.6618 15.512 96.6618 15.728V23H93.3498ZM84.4938 23V5.72H87.3978V14.6H87.8058V23H84.4938ZM105.32 29.12C104.584 29.12 103.884 29 103.22 28.76C102.556 28.528 101.96 28.2 101.432 27.776C100.912 27.36 100.488 26.872 100.16 26.312L103.184 24.848C103.392 25.232 103.688 25.524 104.072 25.724C104.464 25.924 104.888 26.024 105.344 26.024C105.832 26.024 106.292 25.94 106.724 25.772C107.156 25.612 107.5 25.368 107.756 25.04C108.02 24.72 108.144 24.32 108.128 23.84V20.072H108.536V10.04H111.392V23.888C111.392 24.208 111.376 24.508 111.344 24.788C111.32 25.076 111.272 25.36 111.2 25.64C110.992 26.432 110.604 27.084 110.036 27.596C109.476 28.108 108.788 28.488 107.972 28.736C107.156 28.992 106.272 29.12 105.32 29.12ZM105.032 23.36C103.84 23.36 102.796 23.06 101.9 22.46C101.004 21.86 100.304 21.044 99.7996 20.012C99.3036 18.98 99.0556 17.816 99.0556 16.52C99.0556 15.2 99.3076 14.028 99.8116 13.004C100.324 11.972 101.04 11.16 101.96 10.568C102.88 9.976 103.96 9.68 105.2 9.68C106.432 9.68 107.468 9.98 108.308 10.58C109.148 11.18 109.784 11.996 110.216 13.028C110.648 14.06 110.864 15.224 110.864 16.52C110.864 17.816 110.644 18.98 110.204 20.012C109.772 21.044 109.124 21.86 108.26 22.46C107.396 23.06 106.32 23.36 105.032 23.36ZM105.56 20.456C106.288 20.456 106.868 20.292 107.3 19.964C107.74 19.636 108.056 19.176 108.248 18.584C108.44 17.992 108.536 17.304 108.536 16.52C108.536 15.736 108.44 15.048 108.248 14.456C108.056 13.864 107.748 13.404 107.324 13.076C106.908 12.748 106.36 12.584 105.68 12.584C104.952 12.584 104.352 12.764 103.88 13.124C103.416 13.476 103.072 13.952 102.848 14.552C102.624 15.144 102.512 15.8 102.512 16.52C102.512 17.248 102.62 17.912 102.836 18.512C103.052 19.104 103.384 19.576 103.832 19.928C104.28 20.28 104.856 20.456 105.56 20.456Z"
          className='fill-red'
        />
        <path
          d="M26.1103 4.33334H12.5955C6.72512 4.33334 3.22546 6.86501 3.22546 11.1117V20.8767C3.22546 25.135 6.72512 27.6667 12.5955 27.6667H26.0942C31.9646 27.6667 35.4642 25.135 35.4642 20.8883V11.1117C35.4804 6.86501 31.9807 4.33334 26.1103 4.33334ZM16.0307 17.4817C14.9295 18.6749 13.4177 19.6399 11.644 20.2817C11.5033 20.3334 11.3498 20.3645 11.1924 20.3731C11.035 20.3818 10.8768 20.3678 10.7268 20.332C10.5769 20.2962 10.4383 20.2393 10.3189 20.1646C10.1995 20.0899 10.1018 19.9988 10.0312 19.8967C9.95841 19.7935 9.91481 19.6809 9.90302 19.5654C9.89122 19.4498 9.91145 19.3338 9.96254 19.224C10.0136 19.1142 10.0945 19.013 10.2005 18.9261C10.3065 18.8393 10.4353 18.7686 10.5796 18.7183C11.9827 18.2167 13.1761 17.4467 14.0309 16.5133C14.3211 16.1983 14.3211 15.8017 14.0309 15.4867C13.16 14.5533 11.9665 13.7833 10.5796 13.2817C10.4346 13.232 10.3049 13.1617 10.1983 13.075C10.0917 12.9882 10.0104 12.8868 9.95921 12.7768C9.90802 12.6668 9.88802 12.5505 9.9004 12.4348C9.91277 12.3191 9.95728 12.2063 10.0312 12.1033C10.3215 11.6717 11.0473 11.4967 11.644 11.7183C13.418 12.36 14.934 13.3283 16.0307 14.5183C16.8693 15.4167 16.8693 16.5833 16.0307 17.4817ZM27.4166 20.375H20.9657C20.3044 20.375 19.7561 19.9783 19.7561 19.5C19.7561 19.0217 20.3044 18.625 20.9657 18.625H27.4166C28.0779 18.625 28.6262 19.0217 28.6262 19.5C28.6262 19.9783 28.0779 20.375 27.4166 20.375Z"
          className='fill-red'
        />
      </svg>
    </Link>
  );
}
