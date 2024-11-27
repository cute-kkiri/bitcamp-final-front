import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import mapStyles from "../assets/styles/css/Map.module.css";


const Map = ({ storyList, hovered }) => {

    const [oldHovered, setOldHovered] = useState();

    useEffect(() => {
        // storyList 데이터 사용 예시
        if (storyList && storyList.length > 0) {

            storyList.forEach(story => {
                const id = Math.trunc(story.id / 1000)
                const element = document.querySelector('#id-' + id);
                if (element) {
                    if (story.count > 5) {
                        element.setAttribute("data-count", 5);
                    } else {
                        element.setAttribute("data-count", story.count);
                    }
                }
            });
        }

    }, [storyList]); // storyList가 변경될 때마다 실행

    useEffect(() => {
        // 새로운 hovered 요소에 filter 추가
        const leaveElement = document.getElementById(`${oldHovered}`);

        setOldHovered(null);
        if (leaveElement) {
            leaveElement.removeAttribute('filter');
        }

        if (hovered !== null) {
            const gElement = document.getElementById(`${hovered}`);
            setOldHovered(hovered);
            if (gElement) {
                // gElement.setAttribute('border-opacity', '0%');
                gElement.setAttribute('filter', 'drop-shadow(2px 2px 2px gray)');
            }
        }
    }, [hovered]);

    return (
        <div className={`${mapStyles.map__wrap}`}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="800" viewBox="0 0 800 760" strokeLinecap="round" strokeLinejoin="round" id="map" className={`${mapStyles.map__list}`}>
                <g id="전국_시도_경계">
                    <Link to={`/map/story/11`} className={`${mapStyles.city}`}>
                        <g id="id-11" data-count={"0"}>
                            <path d="M 236.02 146.95 239.07 143.2 245.65 144.33 250.73 142.13 252.31 134.57 260.1 134.28 263.99 126.88 272.32 129.18 274.76 139.82 273.24 146.87 280.88 143.64 277.07 153.5 277.86 157.47 269.28 164.21 261.31 159.51 251 163.62 247.56 156.59 241.81 157.19 242.18 149.28 236.02 146.95 Z"
                                id="서울" />
                        </g>
                    </Link>
                    <Link to={`/map/story/26`} className={`${mapStyles.city}`}>
                        <g id="id-26" data-count={"0"}>
                            <path d="M 508.87 444.45 516.23 444.87 520.73 452.23 515.48 455.72 515.12 463.84 508.64 475.85 500.44 476.77 500.8 484.39 492.17 482.27 483.14 493.36 481.21 487.52 465.4 487.9 467.33 486.17 466.39 485.26 463.61 476.7 471.57 475.38 473.63 468.91 483.48 466.99 487.71 461.96 499.01 455.18 501.42 449.59 506.35 449.46 508.87 444.45 Z"
                                id="부산" />
                        </g>
                    </Link>
                    <Link to={`/map/story/27`} className={`${mapStyles.city}`}>
                        <g id="id-27" data-count={"0"}>
                            <path d="M 432.59 404.77 430.2 409.46 414.88 414.9 418.02 410.08 421.49 399.01 416.01 394.31 423.38 382.29 416.26 381.7 417.58 375 423.71 368.98 428.53 376.37 434.01 365.32 442.72 359.88 443.55 351.71 436.8 352.68 432.6 334.16 421.49 330.27 419.42 319.93 422.91 316.01 444.13 325.39 443.79 329.47 451.82 333.43 461.67 334.37 466.9 330.89 471.08 333.14 472.4 340.76 463.44 348.39 455.97 346.65 452.62 350.44 450.52 358.33 455.12 361.76 458.15 379.22 449.57 389.85 449.79 399.28 445.34 401.33 441.96 397.24 436.24 397.72 432.59 404.77 Z"
                                id="대구" />
                        </g>
                    </Link>
                    <Link to={`/map/story/28`} className={`${mapStyles.city}`}>
                        <g id="id-28" data-count={"0"}>
                            <path d="M 213.85 152.26 215.62 155.69 207.37 158.88 200.32 164.97 191.3 157.59 203.15 154.29 208.6 149.53 213.85 152.26 Z M 239.07 143.2 236.02 146.95 233.33 156.21 237.43 159.16 234.57 165.8 225.67 174.81 219.61 171.16 221.04 164.39 217.1 158.31 217.55 147.32 215.04 142.06 220.65 140.15 223.97 135.3 231.6 141.72 239.07 143.2 Z M 192.78 131.39 189.83 133.94 182.54 124.88 183.93 120.41 192.78 131.39 Z M 184.59 112.16 186.82 116.17 177.77 119.17 176.83 111.71 184.59 112.16 Z M 206.57 114.49 207.86 115.22 208.5 116.85 209.58 119.79 208.8 122.47 208.57 122.95 208.45 124.65 211.05 136.96 208.48 140.34 196.14 141.02 193.22 135.2 197.06 132.77 190.76 124.02 190.98 114.41 199.49 108.49 206.57 114.49 Z M 14.06 84.68 10.25 91.67 3.6 91.15 1 85.79 10.71 83.45 14.06 84.68 Z"
                                fillRule="evenodd"
                                id="인천" />
                        </g>
                    </Link>
                    <Link to={`/map/story/29`} className={`${mapStyles.city}`}>
                        <g id="id-29" data-count={"0"}>
                            <path d="M 232.95 463.59 238.01 469.2 249.3 463.78 252.07 464.58 256.83 474.52 262.53 475.82 260.87 482.34 253.9 489.38 243.57 488.54 234.39 492.02 229.96 484.17 220.49 482.56 220.81 472.79 232.95 463.59 Z"
                                id="광주" />
                        </g>
                    </Link>
                    <Link to={`/map/story/30`} className={`${mapStyles.city}`}>
                        <g id="id-30" data-count={"0"}>
                            <path d="M 315.82 328.84 310.07 334.79 301.34 330.81 298.8 335.59 293.65 330.88 288.39 321.54 292.35 304.45 297.28 303.43 305.08 293.83 305.89 298.87 314.33 298.72 322.52 306.1 316.72 314.86 315.82 328.84 Z"
                                id="대전" />
                        </g>
                    </Link>
                    <Link to={`/map/story/31`} className={`${mapStyles.city}`}>
                        <g id="id-31" data-count={"0"}>
                            <path d="M 536.24 407.61 538.1 416.47 535.93 427.67 527.62 434.94 525.18 448.83 520.73 452.23 516.23 444.87 508.87 444.45 507.72 437.73 502.18 436.58 496.13 429.41 485.23 425.47 487.85 417.74 485.96 412.74 493.13 406.87 495.72 401.21 502.16 398.24 514.39 401.17 514.84 407.49 518.97 408.81 526.41 404 536.24 407.61 Z"
                                id="울산" />
                        </g>
                    </Link>
                    <Link to={`/map/story/36`} className={`${mapStyles.city}`}>
                        <g id="id-36" data-count={"0"}>
                            <path d="M 292.79 266.37 291.7 273.38 294.94 280.07 302.82 283.38 305.08 293.83 297.28 303.43 292.35 304.45 287.17 303.86 279.89 291.39 283.9 281.51 279.05 278.2 278.7 268.76 275.94 264.11 279.4 260.38 292.79 266.37 Z"
                                id="세종" />
                        </g>
                    </Link>
                    <Link to={`/map/story/41`} className={`${mapStyles.city}`}>
                        <g id="id-41" data-count={"0"}>
                            <path d="M 343.67 194.22 338.25 204.33 331.87 204.24 331.23 210.41 322.41 217.5 313.3 216.3 312.05 220.9 304.41 226.47 303.16 230.33 295.49 233.44 293.14 238.35 291.55 235.91 278.47 227.73 270.34 231.28 260.73 232.49 251.22 237.1 241.77 225.65 233.28 217.38 226.4 207.71 224.09 201.8 224.15 183.67 225.32 177.93 219.23 179.98 214.99 182.83 221.49 187.77 214.72 192.83 212.59 185.04 214.79 182.75 218.05 180.47 219.7 179.72 227.43 177.09 234.57 165.8 237.43 159.16 233.33 156.21 236.02 146.95 242.18 149.28 241.81 157.19 247.56 156.59 251 163.62 261.31 159.51 269.28 164.21 277.86 157.47 277.07 153.5 280.88 143.64 273.24 146.87 274.76 139.82 272.32 129.18 263.99 126.88 260.1 134.28 252.31 134.57 250.73 142.13 245.65 144.33 239.07 143.2 231.6 141.72 223.97 135.3 220.65 140.15 215.04 142.06 212.9 138.93 211.06 132.61 211.78 131.74 209.22 118.14 209.09 117.93 208.96 116.79 217.35 118.24 224.92 115.61 227.66 102.98 225.42 96.26 229.65 88.86 241.42 85.56 245.99 79.57 247.11 70.58 251.75 66.53 258.79 65.55 258.88 58.08 272.6 46.84 278.26 52.57 282.75 63.38 292.09 67.26 297.09 72.68 303.42 69.41 309.12 69.84 313.55 84.87 321.07 85.77 327.85 91.97 329.44 98.2 319.35 109.91 323.2 124.87 320.57 133.96 327.87 133.83 338.2 140.82 353.96 146.51 346.74 153.88 349.99 163.7 345.34 173.19 343.67 194.22 Z"
                                id="경기" />
                        </g>
                    </Link>
                    <Link to={`/map/story/51`} className={`${mapStyles.city}`}>
                        <g id="id-51" data-count={"0"}>
                            <path d="M 522.53 201.56 512.42 205.84 503.06 215.91 493.06 208.39 489.78 211.43 473.37 211.51 470.34 215.79 457.47 210.71 455.01 218.91 444.07 213.93 431.43 210.73 426.78 205.79 420.03 207.87 414.28 201.45 404.57 204.59 401.09 201.25 401.48 194.7 394.01 189.09 376.4 197.48 373.94 189.85 368.47 188.32 363.22 192.47 364.54 199.36 348.64 203.89 343.67 194.22 345.34 173.19 349.99 163.7 346.74 153.88 353.96 146.51 338.2 140.82 327.87 133.83 320.57 133.96 323.2 124.87 319.35 109.91 329.44 98.2 327.85 91.97 321.07 85.77 313.55 84.87 309.12 69.84 303.42 69.41 297.09 72.68 292.09 67.26 282.75 63.38 278.26 52.57 272.6 46.84 288.62 39.78 295.6 41.95 303.69 39.24 316.43 44.28 325.13 39.35 336.74 40.99 346.67 38.46 351.65 43.79 354.85 42.28 366.5 44.22 371.34 47.6 374.52 42.7 386.15 39.38 401.52 25.28 404.85 14.68 404.4 3.39 408.15 1 415.01 10.75 421.39 27.32 430.69 43.36 432.05 49.51 436.34 55.41 437.49 64.11 467.83 108.41 485.15 127.25 487.28 136.59 492.58 141.2 495.21 150.82 502.34 159.18 503.53 164.66 511.7 177.36 521.31 189.06 522.53 201.56 Z"
                                id="강원" />
                        </g>
                    </Link>
                    <Link to={`/map/story/43`} className={`${mapStyles.city}`}>
                        <g id="id-43" data-count={"0"}>
                            <path d="M 444.07 213.93 436.52 217.01 435.11 221.13 425.35 228.97 419.09 240.26 421.7 244.77 418.79 249.23 407.2 248.06 398.8 241.05 395.12 249.31 386.99 247.16 378.7 248.87 375.77 258.38 377.73 263.86 366.81 262.15 364.32 266.27 365.32 272.52 358.23 271.23 356.04 276.33 349.94 278.52 361.48 288.73 359.12 296.12 358.57 307.71 360.32 311.96 354.79 318.84 370.07 326.04 376.96 325.74 376.92 330.85 369.86 335.66 371.58 340.64 368.39 350.95 358.89 358.48 355.72 356.11 345.72 359.43 332.14 352.24 326.76 343.33 327.59 331.66 315.82 328.84 316.72 314.86 322.52 306.1 314.33 298.72 305.89 298.87 305.08 293.83 302.82 283.38 294.94 280.07 291.7 273.38 292.79 266.37 299.32 257.69 307.81 256.7 305.69 251.48 299.44 247.19 293.14 238.35 295.49 233.44 303.16 230.33 304.41 226.47 312.05 220.9 313.3 216.3 322.41 217.5 331.23 210.41 331.87 204.24 338.25 204.33 343.67 194.22 348.64 203.89 364.54 199.36 363.22 192.47 368.47 188.32 373.94 189.85 376.4 197.48 394.01 189.09 401.48 194.7 401.09 201.25 404.57 204.59 414.28 201.45 420.03 207.87 426.78 205.79 431.43 210.73 444.07 213.93 Z"
                                id="충북" />
                        </g>
                    </Link>
                    <Link to={`/map/story/44`} className={`${mapStyles.city}`}>
                        <g id="id-44" data-count={"0"}>
                            <path d="M 203.51 290.75 203.78 289.37 200.4 278.91 190.49 274.45 191.83 285.19 197.35 300.62 190.81 304.22 186.54 299.26 187.28 291.21 182.62 270.08 178.99 265.07 166.84 266.85 170.62 256.76 165.15 253.61 171.02 238.94 177.97 235.05 185.08 238.98 181.37 248 189.56 246.01 192.84 239.28 198.18 237.04 196.89 231.68 187.87 228.39 186.92 222.95 195.54 220.51 200.67 222.15 204.84 214.92 220.7 223.06 228.62 223.44 237.24 226.86 242.03 238.84 251.22 237.1 260.73 232.49 270.34 231.28 278.47 227.73 291.55 235.91 293.14 238.35 299.44 247.19 305.69 251.48 307.81 256.7 299.32 257.69 292.79 266.37 279.4 260.38 275.94 264.11 278.7 268.76 279.05 278.2 283.9 281.51 279.89 291.39 287.17 303.86 292.35 304.45 288.39 321.54 293.65 330.88 298.8 335.59 301.34 330.81 310.07 334.79 315.82 328.84 327.59 331.66 326.76 343.33 332.14 352.24 320.73 362.17 311.8 363.97 309.32 357.59 302.81 358.5 300.2 345.98 293.41 346.16 277.71 349.4 274.38 352.81 267.43 348.6 267.73 344.28 255.85 339.9 248.97 341.8 245.38 353.13 231.64 359.65 224.4 360.03 219.51 349.97 213.25 342.1 207.01 340.1 210.26 324.35 205.72 316.9 211.52 312.91 205.6 308.17 203.51 290.75 Z"
                                id="충남" />
                        </g>
                    </Link>
                    <Link to={`/map/story/52`} className={`${mapStyles.city}`}>
                        <g id="id-52" data-count={"0"}>
                            <path d="M 332.14 352.24 345.72 359.43 355.72 356.11 358.89 358.48 362.64 368.27 359.88 374.05 354.27 379.96 345.04 383.65 336.42 393.25 326.3 423.07 333.62 430.9 336.28 438.23 325.42 456.97 316.88 450.16 309.45 449.66 304.52 457.19 300.17 455.11 294.72 457.55 280.91 454.03 272 458.22 268.09 452.49 264.26 436.15 260.75 435.47 257.47 444.25 252.86 444.98 248.55 437.59 240.48 432.24 230.59 437.26 232.21 441.79 229.79 447.27 219.97 454.96 213.43 453.48 207.43 456.66 201.96 445.19 197.83 439.7 196.32 437.91 201.9 427.5 213.03 424.01 212.43 417.66 204.92 419.14 200.21 411.39 210.45 402.84 208.9 400.56 211.87 403.54 217.55 396.85 212.54 392.07 219.45 386.54 226.54 387.1 222.55 377.3 217.04 376.93 209.18 372.84 207.39 364.75 231.05 363.29 231.64 359.65 245.38 353.13 248.97 341.8 255.85 339.9 267.73 344.28 267.43 348.6 274.38 352.81 277.71 349.4 293.41 346.16 300.2 345.98 302.81 358.5 309.32 357.59 311.8 363.97 320.73 362.17 332.14 352.24 Z"
                                id="전북" />
                        </g>
                    </Link>
                    <Link to={`/map/story/46`} className={`${mapStyles.city}`}>
                        <g id="id-46" data-count={"0"}>
                            <path d="M 215.9 614.53 207.21 619.51 206.67 611.87 215.9 614.53 Z M 248.84 616.4 241.81 613.11 246.8 607.29 251.14 611.15 248.84 616.4 Z M 212.32 613.18 209.03 612.31 208.59 604.76 214.29 606.07 212.32 613.18 Z M 232.8 595.09 224.5 596.77 219.26 591.23 218.18 584.36 223.83 581.94 228.27 584.34 232.8 595.09 Z M 286.32 572.09 283.26 578.11 275.17 578.34 276.08 572.08 284.41 569.17 286.32 572.09 Z M 311.99 571.49 309.1 565.82 314.19 563.23 317.39 569.63 311.99 571.49 Z M 180.16 558.06 189.07 567.09 188.87 570.79 181.66 578.17 165.63 588.37 159.86 586.71 155.37 578.64 158.58 573.01 172.35 562.59 174.06 555.41 180.16 558.06 Z M 150.1 549.36 157.49 555.73 156.79 560.21 148.96 563.04 147.59 558.18 150.1 549.36 Z M 160.43 551.85 163.19 543.66 167.68 549.22 160.43 551.85 Z M 349.35 538.73 350.62 547.21 349.7 556.79 340.8 551.75 349.35 538.73 Z M 143.02 536.7 146.86 541.31 140.38 545.28 136.2 537.98 143.02 536.7 Z M 155.11 537.93 154.87 531 165.42 532.85 155.11 537.93 Z M 146.03 527.31 145.68 531.17 137.01 537.16 133.39 534.82 134.44 528.52 146.03 527.31 Z M 161.04 515.66 164.03 517.54 159.47 526.02 153.01 519.16 161.04 515.66 Z M 156.94 515.48 150.47 518.99 144.6 515.56 155.17 507.9 156.94 515.48 Z M 165.24 478.61 160.84 479.76 157.96 491.84 151.98 487.17 159.99 479.11 165.24 478.61 Z M 185.13 487.48 181.76 490.6 172.88 491.36 164.84 489.37 164.66 484.93 174.39 483.32 178.2 479.1 184.99 481.91 185.13 487.48 Z M 187.05 489.4 194.94 495.14 199.31 485.18 194.4 484.15 187.1 473.65 180.74 469.48 185.18 459.44 189.84 453.68 194.85 439.94 197.83 439.7 201.96 445.19 207.43 456.66 213.43 453.48 219.97 454.96 229.79 447.27 232.21 441.79 230.59 437.26 240.48 432.24 248.55 437.59 252.86 444.98 257.47 444.25 260.75 435.47 264.26 436.15 268.09 452.49 272 458.22 280.91 454.03 294.72 457.55 300.17 455.11 304.52 457.19 309.45 449.66 316.88 450.16 325.42 456.97 330.14 467.1 330.03 473.24 338.63 481.91 339.02 485.52 349.02 496.72 346.11 504.12 348.02 515.16 338.63 511.04 332.5 515.59 326.85 516.87 332.15 523.28 339.24 518.97 346.44 518.35 347.85 522.02 343.97 535.8 339.24 538.02 334.73 533.25 329.71 539.85 332.7 549.63 322.96 546.79 322.17 539.32 327.22 534.81 318.4 516.87 313.73 521.12 305.37 523.69 302.86 537.09 310.55 545.39 315.72 548.65 317.38 554.54 310.36 557.91 308.23 565.6 295.13 575.36 288.71 565.63 281.93 564.1 276.37 565.63 272.66 560.21 281.21 548.73 285.62 547.16 286.66 541.9 295.48 545.84 297.89 539.75 297.02 533.95 289.81 536.55 287.26 532.64 279.91 542.02 275.21 540.81 261.85 550.95 258.7 557.05 257.02 572.1 253.47 574.29 238.71 575.28 235.78 572.73 235.86 558.46 232.82 559.53 232.33 568.5 228.59 575.3 215.74 581.81 216 587.55 211.86 592.87 205.29 596.55 204.54 587.2 199.44 583.94 200.48 577.09 199.17 566.99 194.43 560.24 183.17 558.07 175.3 548.22 175.4 541.09 178.36 532.23 182.97 534.33 185.3 540.19 190.17 536 186.39 527.11 190.23 521.39 187.53 509.88 183.66 510.33 179.81 503.5 186.91 501.1 190.71 495.53 187.05 489.4 Z M 232.95 463.59 220.81 472.79 220.49 482.56 229.96 484.17 234.39 492.02 243.57 488.54 253.9 489.38 260.87 482.34 262.53 475.82 256.83 474.52 252.07 464.58 249.3 463.78 238.01 469.2 232.95 463.59 Z"
                                id="전남" />
                        </g>
                    </Link>
                    <Link to={`/map/story/47`} className={`${mapStyles.city}`}>
                        <g id="id-47" data-count={"0"}>
                            <path d="M 536.24 407.61 526.41 404 518.97 408.81 514.84 407.49 514.39 401.17 502.16 398.24 495.72 401.21 493.13 406.87 485.96 412.74 476.04 410.08 461.83 420.37 446.85 416.36 440.93 418.87 433.43 412.87 432.59 404.77 436.24 397.72 441.96 397.24 445.34 401.33 449.79 399.28 449.57 389.85 458.15 379.22 455.12 361.76 450.52 358.33 452.62 350.44 455.97 346.65 463.44 348.39 472.4 340.76 471.08 333.14 466.9 330.89 461.67 334.37 451.82 333.43 443.79 329.47 444.13 325.39 422.91 316.01 419.42 319.93 421.49 330.27 432.6 334.16 436.8 352.68 443.55 351.71 442.72 359.88 434.01 365.32 428.53 376.37 423.71 368.98 417.58 375 416.26 381.7 423.38 382.29 416.01 394.31 421.49 399.01 418.02 410.08 414.88 414.9 412.29 410.01 406.46 408.74 398.84 411.08 394.18 395.63 380.38 383.62 374.16 385.11 365.31 380.26 359.88 374.05 362.64 368.27 358.89 358.48 368.39 350.95 371.58 340.64 369.86 335.66 376.92 330.85 376.96 325.74 370.07 326.04 354.79 318.84 360.32 311.96 358.57 307.71 359.12 296.12 361.48 288.73 349.94 278.52 356.04 276.33 358.23 271.23 365.32 272.52 364.32 266.27 366.81 262.15 377.73 263.86 375.77 258.38 378.7 248.87 386.99 247.16 395.12 249.31 398.8 241.05 407.2 248.06 418.79 249.23 421.7 244.77 419.09 240.26 425.35 228.97 435.11 221.13 436.52 217.01 444.07 213.93 455.01 218.91 457.47 210.71 470.34 215.79 473.37 211.51 489.78 211.43 493.06 208.39 503.06 215.91 512.42 205.84 522.53 201.56 528.87 213.74 527.95 217.89 528.98 236.82 536.28 253.42 536.23 262.83 532.57 266.43 529.21 277.49 533.69 289.72 532.58 300.7 526.48 313.84 526.24 330.94 529.14 341.07 533.88 346.46 526.49 352.77 528.81 357.91 534.88 360.64 541.08 355.92 545.96 347.54 548.56 349.05 549.54 357.64 543.79 368.47 543.45 380.2 538.62 403.53 536.24 407.61 Z M 690.71 151.38 687.29 153.78 681.07 151.97 679.19 146.6 690.94 141.19 690.71 151.38 Z"
                                id="경북" />
                        </g>
                    </Link>
                    <Link to={`/map/story/48`} className={`${mapStyles.city}`}>
                        <g id="id-48" data-count={"0"}>
                            <path d="M 368.29 526.35 372.36 522.57 380.41 524.11 380.02 534.47 368.92 539.62 367.17 530.08 356.77 531.36 352.29 522.43 357.13 509.49 364.49 508.47 361.9 517.05 368.29 526.35 Z M 448.79 534.4 446.32 539.16 439.33 539.91 439.13 529.44 441.1 522.5 438.61 519.06 431.67 525.34 427.19 516.62 434.52 510.17 438.15 512.93 442.34 503.03 447.05 503.31 450.13 493.47 454.01 497.59 455.53 505.7 453.83 512.69 458.37 514.28 454.28 524.63 450.15 524.43 446.22 531.72 448.79 534.4 Z M 414.88 414.9 430.2 409.46 432.59 404.77 433.43 412.87 440.93 418.87 446.85 416.36 461.83 420.37 476.04 410.08 485.96 412.74 487.85 417.74 485.23 425.47 496.13 429.41 502.18 436.58 507.72 437.73 508.87 444.45 506.35 449.46 501.42 449.59 499.01 455.18 487.71 461.96 483.48 466.99 473.63 468.91 471.57 475.38 463.61 476.7 466.39 485.26 467.33 486.17 465.4 487.9 453.03 484.87 452.24 479.67 442.67 478.49 439.97 480.82 445.47 489.08 438.37 491.42 434.67 482.68 426.71 485.5 430.24 497.2 422.73 501.14 420.95 511.48 427.06 513.97 421.86 531.71 418.82 531.08 414.34 517.08 413.92 511.67 407.6 511.26 403.82 507.63 395.79 508.1 396.57 513.1 388.66 514.76 377.19 505.16 363.94 500.88 361.79 505.48 351.06 508.51 346.11 504.12 349.02 496.72 339.02 485.52 338.63 481.91 330.03 473.24 330.14 467.1 325.42 456.97 336.28 438.23 333.62 430.9 326.3 423.07 336.42 393.25 345.04 383.65 354.27 379.96 359.88 374.05 365.31 380.26 374.16 385.11 380.38 383.62 394.18 395.63 398.84 411.08 406.46 408.74 412.29 410.01 414.88 414.9 Z"
                                id="경남" />
                        </g>
                    </Link>
                    <Link to={`/map/story/50`} className={`${mapStyles.city}`}>
                        <g id="id-50" data-count={"0"}>
                            <path d="M 235.45 698.46 246.51 702.5 249.85 714.55 239.73 732.51 228.89 736.74 219.62 737.19 212.32 742.56 208.76 741.34 198 743.57 190.11 740.98 181.13 741.37 173.09 746.73 163.96 738.57 161.69 728.28 172.07 719.17 180.83 709.31 195.5 706.17 201.22 703.44 233.43 697.2 235.45 698.46 Z"
                                id="제주" />
                        </g>
                    </Link>
                </g>
            </svg>
        </div>
    );
}

export default Map;