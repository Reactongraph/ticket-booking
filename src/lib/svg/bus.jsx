import React from "react";
const BusIcon = ({ active = false, ...props }) => (
  <svg
    fill="#000000"
    height="45px"
    width="45px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 490 490"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path
        d="M479.397,183.2h-28.52c-5.851,0-10.608,4.756-10.608,10.602v44.876h-10.24V92.449c0-27.951-20.637-51.023-59.678-66.723
		C337.491,12.511,293.3,5.233,245.918,5.233l-0.902,0.001l-0.93-0.001c-47.387,0-91.579,7.277-124.439,20.491
		c-39.04,15.699-59.676,38.772-59.676,66.725v146.23h-10.24v-44.876c0-5.847-4.758-13.536-10.608-13.536h-28.52
		C4.757,180.266,0,187.956,0,193.802v73.646c0,5.846,4.757,10.602,10.604,10.602h49.368v119.228
		c0,21.12,15.612,38.657,35.901,41.689v31.579c0,7.84,6.379,14.22,14.218,14.22h35.398c7.84,0,14.216-6.379,14.216-14.22v-31.112
		h170.6v31.112c0,7.84,6.376,14.22,14.216,14.22h35.391c7.838,0,14.216-6.379,14.216-14.22v-31.579
		c20.289-3.03,35.901-20.569,35.901-41.689V278.051h49.368c5.847,0,10.603-4.756,10.603-10.602v-73.646
		C490,187.956,485.243,183.2,479.397,183.2z M13.979,264.071v-66.892h21.772v48.489c0,3.86,3.13,6.99,6.99,6.99h17.229v11.413
		H13.979z M145.726,470.547c0,0.132-0.105,0.24-0.236,0.24h-35.398c-0.13,0-0.237-0.108-0.237-0.24v-31.112h35.872V470.547z
		 M380.147,470.547c0,0.136-0.101,0.24-0.235,0.24h-35.391c-0.133,0-0.236-0.105-0.236-0.24v-31.112h35.862V470.547z
		 M416.048,397.279c0,15.536-12.639,28.176-28.174,28.176H102.13c-15.538,0-28.178-12.64-28.178-28.176V92.449
		c0-48.08,85.588-73.236,170.134-73.236l0.93,0.001l0.902-0.001c84.544,0,170.13,25.156,170.13,73.236V397.279z M476.021,264.071
		h-45.992v-11.413h17.23c3.86,0,6.99-3.129,6.99-6.99v-48.489h21.773V264.071z"
      />
      <g>
        <g>
          <path
            d="M365.159,278.051H124.838c-15.976,0-28.973-12.997-28.973-28.974V131.542c0-15.971,12.997-28.965,28.973-28.965h240.321
				c15.977,0,28.975,12.994,28.975,28.965v117.535C394.135,265.054,381.136,278.051,365.159,278.051z M124.838,116.557
				c-8.268,0-14.992,6.722-14.992,14.985v117.535c0,8.268,6.725,14.994,14.992,14.994h240.321c8.268,0,14.995-6.726,14.995-14.994
				V131.542c0-8.263-6.727-14.985-14.995-14.985H124.838z"
          />
        </g>
        <g>
          <path
            d="M365.149,362.733c-15.978,0-28.978-12.995-28.978-28.969c0-15.976,13-28.974,28.978-28.974
				c15.974,0,28.969,12.998,28.969,28.974C394.118,349.738,381.123,362.733,365.149,362.733z M365.149,318.771
				c-8.27,0-14.997,6.726-14.997,14.994c0,8.265,6.728,14.989,14.997,14.989c8.265,0,14.988-6.725,14.988-14.989
				C380.138,325.497,373.414,318.771,365.149,318.771z"
          />
        </g>
        <g>
          <path
            d="M124.842,362.733c-15.978,0-28.977-12.995-28.977-28.969c0-15.976,12.999-28.974,28.977-28.974
				c15.969,0,28.96,12.998,28.96,28.974C153.802,349.738,140.811,362.733,124.842,362.733z M124.842,318.771
				c-8.27,0-14.996,6.726-14.996,14.994c0,8.265,6.726,14.989,14.996,14.989c8.259,0,14.98-6.725,14.98-14.989
				C139.821,325.497,133.101,318.771,124.842,318.771z"
          />
        </g>
        <g>
          <path
            d="M334.387,90.516H155.607c-27.464,0-29.598-14.887-29.598-19.449c0-13.689,15.571-24.119,47.604-31.885
				c25.092-6.083,53.933-8.806,71.386-8.806c17.452,0,46.294,2.723,71.384,8.806c32.033,7.766,47.605,18.196,47.605,31.885
				C363.988,75.629,361.854,90.516,334.387,90.516z M245,44.356c-16.62,0-44.122,2.601-68.091,8.412
				c-29.203,7.08-36.92,15.066-36.92,18.299c0,3.322,6.13,5.469,15.618,5.469h178.779c9.49,0,15.622-2.147,15.622-5.469
				c0-3.233-7.716-11.219-36.918-18.299C289.121,46.958,261.62,44.356,245,44.356z"
          />
        </g>
        <g>
          <g>
            <path
              d="M209.581,238.873c-1.226,0-2.468-0.323-3.595-1.001c-3.309-1.99-4.378-6.285-2.388-9.592l50.002-83.137
					c1.989-3.308,6.284-4.377,9.592-2.387c3.308,1.99,4.378,6.285,2.388,9.593l-50.003,83.136
					C214.267,237.665,211.954,238.873,209.581,238.873z"
            />
          </g>
          <g>
            <path
              d="M233.424,238.873c-1.226,0-2.468-0.323-3.595-1.001c-3.31-1.989-4.378-6.285-2.388-9.592l36.57-60.806
					c1.989-3.308,6.282-4.377,9.592-2.387c3.309,1.989,4.377,6.285,2.387,9.593l-36.57,60.805
					C238.109,237.665,235.797,238.873,233.424,238.873z"
            />
          </g>
          <g>
            <path
              d="M257.263,238.873c-1.226,0-2.468-0.323-3.596-1.001c-3.309-1.99-4.377-6.285-2.387-9.592l23.143-38.478
					c1.989-3.308,6.283-4.376,9.592-2.387c3.309,1.99,4.377,6.284,2.387,9.593l-23.143,38.478
					C261.948,237.665,259.635,238.873,257.263,238.873z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M301.163,340.752H188.837c-3.859,0-6.99-3.129-6.99-6.99c0-3.861,3.131-6.99,6.99-6.99h112.326
					c3.859,0,6.99,3.129,6.99,6.99C308.153,337.622,305.022,340.752,301.163,340.752z"
            />
          </g>
          <g>
            <path
              d="M301.163,369.723H188.837c-3.859,0-6.99-3.129-6.99-6.99c0-3.86,3.131-6.99,6.99-6.99h112.326
					c3.859,0,6.99,3.129,6.99,6.99C308.153,366.594,305.022,369.723,301.163,369.723z"
            />
          </g>
          <g>
            <path
              d="M301.163,398.694H188.837c-3.859,0-6.99-3.129-6.99-6.99c0-3.86,3.131-6.99,6.99-6.99h112.326
					c3.859,0,6.99,3.129,6.99,6.99C308.153,395.564,305.022,398.694,301.163,398.694z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
export default BusIcon;
