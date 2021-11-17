import React from 'react'
import './TopFooter.css'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ReactComponent as Dark } from './dark.svg';

function TopFooter() {
    return (
        <div className='top'>
            <div>
                <div className='gray-line-1'></div>
                <svg
                    width='36'
                    height='34'
                    viewBox='0 0 36 34'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className="mixin-logo"
                >
                    <path
                        d='M17.9943 9.90826L5.66023 16.7074L2.56248 14.9991C0.979437 14.1335 0 12.4707 0 10.6599V0.0227781L0.0113895 0L17.9943 9.90826Z'
                        fill='white'
                    />
                    <path
                        d='M35.9887 22.7436V33.3808L35.9774 33.4035L20.4316 24.8392L32.071 18.4273L32.7771 18.04L33.4377 18.4045C35.0093 19.27 35.9887 20.9328 35.9887 22.7436Z'
                        fill='white'
                    />
                    <path
                        d='M36 0C36 3.55331 36 7.10661 36 10.6599C36 12.4707 35.0206 14.1221 33.4375 14.9991L30.3398 16.7074L17.9943 23.4951L1.7311 32.4467L0.0113895 33.392L0 33.3692V22.732C0 20.9212 0.979437 19.2699 2.56248 18.3929L5.66024 16.6846L17.9943 9.88548C23.9962 6.60551 29.9981 3.30275 36 0Z'
                        fill='white'
                    />
                </svg>

                <div className='gray-line-2'></div>
            </div>
            <svg
                width='35'
                height='35'
                viewBox='0 0 55 55'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='theme-svg'
            >
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M30.2077 3.12533C30.2077 2.40703 29.9223 1.71816 29.4144 1.21024C28.9065 0.702334 28.2176 0.416992 27.4993 0.416992C26.7811 0.416992 26.0922 0.702334 25.5843 1.21024C25.0764 1.71816 24.791 2.40703 24.791 3.12533V5.83366C24.791 6.55195 25.0764 7.24083 25.5843 7.74874C26.0922 8.25665 26.7811 8.54199 27.4993 8.54199C28.2176 8.54199 28.9065 8.25665 29.4144 7.74874C29.9223 7.24083 30.2077 6.55195 30.2077 5.83366V3.12533ZM10.4558 6.6272C9.94501 6.13386 9.26088 5.86087 8.55076 5.86704C7.84065 5.87321 7.16136 6.15804 6.65922 6.66019C6.15707 7.16234 5.87224 7.84162 5.86606 8.55174C5.85989 9.26186 6.13288 9.94599 6.62622 10.4568L9.33456 13.1651C9.84536 13.6585 10.5295 13.9314 11.2396 13.9253C11.9497 13.9191 12.629 13.6343 13.1311 13.1321C13.6333 12.63 13.9181 11.9507 13.9243 11.2406C13.9305 10.5305 13.6575 9.84633 13.1641 9.33553L10.4558 6.6272ZM48.3725 6.6272C47.8646 6.11947 47.1758 5.83424 46.4577 5.83424C45.7395 5.83424 45.0508 6.11947 44.5429 6.6272L41.8346 9.33553C41.3412 9.84633 41.0682 10.5305 41.0744 11.2406C41.0806 11.9507 41.3654 12.63 41.8675 13.1321C42.3697 13.6343 43.049 13.9191 43.7591 13.9253C44.4692 13.9314 45.1533 13.6585 45.6641 13.1651L48.3725 10.4568C48.8802 9.9489 49.1654 9.26015 49.1654 8.54199C49.1654 7.82384 48.8802 7.13509 48.3725 6.6272ZM27.4993 13.9587C23.9079 13.9587 20.4635 15.3854 17.9239 17.9249C15.3844 20.4645 13.9577 23.9089 13.9577 27.5003C13.9577 31.0918 15.3844 34.5362 17.9239 37.0757C20.4635 39.6153 23.9079 41.042 27.4993 41.042C31.0908 41.042 34.5352 39.6153 37.0748 37.0757C39.6143 34.5362 41.041 31.0918 41.041 27.5003C41.041 23.9089 39.6143 20.4645 37.0748 17.9249C34.5352 15.3854 31.0908 13.9587 27.4993 13.9587ZM3.12435 24.792C2.40605 24.792 1.71718 25.0773 1.20927 25.5852C0.701357 26.0932 0.416016 26.782 0.416016 27.5003C0.416016 28.2186 0.701357 28.9075 1.20927 29.4154C1.71718 29.9233 2.40605 30.2087 3.12435 30.2087H5.83268C6.55098 30.2087 7.23985 29.9233 7.74776 29.4154C8.25567 28.9075 8.54102 28.2186 8.54102 27.5003C8.54102 26.782 8.25567 26.0932 7.74776 25.5852C7.23985 25.0773 6.55098 24.792 5.83268 24.792H3.12435ZM49.166 24.792C48.4477 24.792 47.7588 25.0773 47.2509 25.5852C46.743 26.0932 46.4577 26.782 46.4577 27.5003C46.4577 28.2186 46.743 28.9075 47.2509 29.4154C47.7588 29.9233 48.4477 30.2087 49.166 30.2087H51.8743C52.5926 30.2087 53.2815 29.9233 53.7894 29.4154C54.2973 28.9075 54.5827 28.2186 54.5827 27.5003C54.5827 26.782 54.2973 26.0932 53.7894 25.5852C53.2815 25.0773 52.5926 24.792 51.8743 24.792H49.166ZM13.1641 45.6651C13.4228 45.4153 13.6291 45.1164 13.7711 44.786C13.913 44.4556 13.9877 44.1002 13.9909 43.7406C13.994 43.381 13.9255 43.0243 13.7893 42.6915C13.6531 42.3587 13.452 42.0563 13.1977 41.802C12.9434 41.5477 12.641 41.3466 12.3082 41.2104C11.9753 41.0742 11.6187 41.0057 11.2591 41.0088C10.8995 41.0119 10.5441 41.0867 10.2137 41.2286C9.88324 41.3705 9.58439 41.5769 9.33456 41.8355L6.62622 44.5439C6.36755 44.7937 6.16122 45.0926 6.01928 45.423C5.87734 45.7534 5.80263 46.1088 5.7995 46.4684C5.79638 46.828 5.8649 47.1846 6.00108 47.5175C6.13726 47.8503 6.33836 48.1527 6.59265 48.407C6.84695 48.6613 7.14934 48.8624 7.48218 48.9986C7.81503 49.1348 8.17166 49.2033 8.53127 49.2002C8.89088 49.197 9.24627 49.1223 9.57669 48.9804C9.90712 48.8384 10.206 48.6321 10.4558 48.3735L13.1641 45.6651ZM45.6641 41.8355C45.1533 41.3422 44.4692 41.0692 43.7591 41.0754C43.049 41.0815 42.3697 41.3664 41.8675 41.8685C41.3654 42.3707 41.0806 43.05 41.0744 43.7601C41.0682 44.4702 41.3412 45.1543 41.8346 45.6651L44.5429 48.3735C45.0537 48.8668 45.7378 49.1398 46.4479 49.1336C47.1581 49.1274 47.8373 48.8426 48.3395 48.3405C48.8416 47.8383 49.1265 47.159 49.1326 46.4489C49.1388 45.7388 48.8658 45.0547 48.3725 44.5439L45.6641 41.8355ZM30.2077 49.167C30.2077 48.4487 29.9223 47.7598 29.4144 47.2519C28.9065 46.744 28.2176 46.4587 27.4993 46.4587C26.7811 46.4587 26.0922 46.744 25.5843 47.2519C25.0764 47.7598 24.791 48.4487 24.791 49.167V51.8753C24.791 52.5936 25.0764 53.2825 25.5843 53.7904C26.0922 54.2983 26.7811 54.5837 27.4993 54.5837C28.2176 54.5837 28.9065 54.2983 29.4144 53.7904C29.9223 53.2825 30.2077 52.5936 30.2077 51.8753V49.167Z'
                    fill='white'
                />
            </svg>
        </div>
    )
}
export default TopFooter