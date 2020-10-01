import React from 'react';
import BrandCard from './layouts/BrandCard';

const ShopBrands = () => {
  return (
    <div>
      <h2
        className='display-4 text-center'
        style={{ textDecoration: 'underline' }}>
        Shop By Brands
      </h2>

      <div
        className='scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4'
        style={{ overflowX: 'auto' }}>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard img='https://upload.wikimedia.org/wikipedia/commons/9/97/Agn%C3%A8s_b._logo.png' />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard img='data:image/png;base64,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' />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard img='https://assets.simpleview-europe.com/portsmouth2014/imageresizer/?image=%2Fdmsimgs%2FFurla_349717550.png&action=ProductDetail' />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard img='https://1000logos.net/wp-content/uploads/2019/06/Levis-Logo-1968%E2%80%932003.jpg' />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard img='https://1000logos.net/wp-content/uploads/2018/04/Old-New-Balance-Logo.jpg' />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard img='https://www.policelifestyle.com/media/seller_image/default/logo_police.jpg' />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard img='https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png' />
        </div>
        <div className='col-xs-6 col-sm-4'>
          <BrandCard img='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAC1CAMAAACtbCCJAAAAwFBMVEX///8TJFLMBRzLBRwAAEKtsLsACkfa3OBdH0Vub4jc2uAAGUyprLiHh5sAJVXSABj88u4AFEwAAEXIAACxECnPqrAAAD8CJVMAAEcJHk8AFkuSkqR9f5T59/nOzdVCS2tLU3FkaoLq6e12d45fYH4AEEk+QWefn64AC0kAADzR0Nfy8PTHxtAnMFtARmm7usVSWHUrM16am6o0O2KIhJsAADGLj59cFD9VADi0rLbZz9KuAA3Iq7EaIFRgZoAAADZJcXU9AAAM2klEQVR4nO2dCXfbuhGFwUVyLcrpE9MyomwpfrIUrV5it+nyGuf//6sHLsDcIQHKqWzH8ME9Lw7FBQI+ztwZyW0ohJeXl5eXl5fXe9Bs2HunGp4cgeUi679TbYZHYDkbBe9UfY/FJI/FKI/FKI/FKI/FKI/FKI/FKI/FKI/FKI/FKI/FKI/FqOfHkrOPop1vni/TOO0n3TPM+xN6Menn9jOXcDDvW29ZQrOSczWP9+xY8rvekNS77lhvfLPaDra9Rdyx1CB/7J2l6kV63ruznjxZ9a7VweRz735pPi256A3reSd3Pct4z45lcsFO+WpdbxLM6nPmlx1BNTqX7zOutlO5fTGxnTmWI9UA8+9TsYvNp+Vfhdhn5VYyFYOx8aTnj5bLldT9XGzviw3rcpPPcoDB+em3vfz7am09r8AiHss3Wp6KTixTIbabanMuEVmwBJM7Ic4LGvFA7JavlETSMKQ2MzHMig3bGvJcXr/IlskofpBruLMaTIlFfElqkAewiF4BI9uKDizBWA55mQRxrxr3dbCUSiWWTrtNZZA8VNCS5a5jDRLLbCumkzy/nor9thvLP+Sc0iCT6z3vGDLI9nLAWGb7lW2Ox2GxTrELS17+EeJeZU6yEOLUNpTEsv0xl4tM5Y9/DrqxXMs4+H0jfzyedmEJxjuxfRBiaD3lF2ApF3smxHed1puduLW5S4Elu5YuORPTIDuA5cvmVs5Kxkp21YkleSimP8isJ7xgEtltVLrnUOxoUuNbsU0tZxZY0tFl8XY3SXwIS17aym026cYSLK+EmHY0o78Ii3xbmHZ6CEuwlkXocRkcxhLIXNtmwSEswY+d+NYRzr/Icov6QtiyE7HvxhKk90VNfQKW/LpoRZJDWDKJxVomfxmW/IssterqosGy2lSNJRgVZz8BS5AXZ79hLF1JVCxwqj6PbAZCWKeosKirDmIp5SqW/EY2XME4yfN+0cLYR/r/sBz0lvhtYilrgRg+fr07n9a9qVkvhOWNRksQrBdTPY69gSiwDJ6IRfxMEk2F7SN2oRfCslxt7b2emnp8tp1OpyervGN+coGDoT6+7g1+t356Wu4HD2o7XwysDWKpdL+96vii56W+nVumh6hIjdJ4ncaWD7FKSQolrZ92rCVNaaQkPRCscddI/ktLszwWozwWozwWozwWozwWozwWozwWozwWozwWozwWozwWo47DMk5eTx8+fPhU/PlU/Kw2PhV7PqkX9Qb7YVR9tLpc7ag3PlUjro/BMjx9Rf3rL6+of//nCCyvqd8+/vUV9fHvv3q9T9RvH8MwjCL5X1T/FVU7akVqO4oah2FbnREy6QPq8ihyDUu5RBOW8AgsEXvhGha+VrUivbcOJVxrvZMzU9dUuyL1pyZeXe0almI59frU4iNacmjAErWCoYWLsNSju4QF11d7TL2gRhBEev3qEEsuxEohgwdDl5KIrQRCnoKIxVG9Q8cLhg/PPeVXoT7RJSyYHnrtIZAwGKiOBPpBWIBp4xyXkggdk4UN/CTv5ETAf9BtoaxFSNuxaIGA507ZyhMKKyuWSIGLEEvkGhZYLNxXHRl0kGVJSDi4+agtzUNd4lgSUbZgHqFHQADRCiNVt7QrQfWhYo0h4xYWCAe0l6pSIyk0G5UziAWiCwIOw8s1LDpxWPZgXYL6rWBR+FD/VgUJDQZ1ya0CzfMGTZQVZfQeG5aQ9S1Nb3YLCy4bDbeRNXDXwVxxH+/lmh1N5FglCrWj4vIRSNSioqsP7tNYdHSgHbuHhZcXNBjluxgymgivTvDdSsgavhAOOoVFVRwdBixRdCLoJWszVcw0luZ3EGRP1VluYSELwGSBu48BA2GCG/QRErCEERvAqSTiaUMrMmQOZE2jYJkqFKvOzkWLGQuWk5aX8O9+G2XnfWBBU6SF0l9YZIEClRcVJRovRJP2mGrLQSzYpsKHP27HaCgYBljD0HbUMO5VInJMwBLisnhJhqBq1SxIQxxCn+AQFrIG8lqyD9356iatQY1CAjwKcwl3uIyFAOgbrzMITOMQFhMnl7DgmsA5FBaIEFohNDK8T2GveNviWN8CWKDHhW+rQ/gaCnJJOSy2OFTPtR1FzmLRTkpLhhqjK7Du3ggixA+ESdOs9QCuYcG5c29ptmTaT3SWQAOH29TM0A+nsEQNLOgtnJO2G+hrLViAopNYKAXATDB2QoRBjRuYKctCzCdeiVzDottUCBDWs5GNsuRQ647MWHiBjtzCQhmAQUOGq/MDPSY0RA6lFo6Dp7lUiXDR1RroM5DOJYqbpslQrsFhRYXAVK/cwgKr4qVa32kIJ8o2CxadlG0TcghLiJGPeUAFGPYQLOhJkJIaDvo5yis3scB3JjoT0EcbtmzGEr0bLHp52KZQ00Gei7Wcb6P/KFOBGKyPOIQFIoG1JoqLrj66nuAudpDaHCxCYEEuYYGeLTKFA3Jp7IBAwrTBsMKq7hKWVkLg2uE3PSrPwgZHCBIdMxEcRF9yH0towRI1sEAfSwNETWbutXO05CaYkCUAZYQCya2VIimCYsR5O4SFZQ3d7oZZtowi4r8EUddBOrHy7BwWiJYI1gAxo17wKs27k5YlG8Z0CgtFSTOXWv1so8CQ2UCmodFoL3KwEtHEeSxAiEDcYGgxLHAGRgslmmNYIEvIOljNoapbnxjRJayTRRwqnNhhh7BEFiw8ONpYIHwijkWlZeg0Fl1rtctAlmibgMXRXnal4Vr2y0i3fiHCyymV27rwUCBBHGCeRbgTXYqnVuTc11DtkgtWqQOFOS/mGrNf3g9CHIXudblolZAizF0ocSCC9Et1He/e9HXqdHexoJ/AgixYMH+4IWFDF7qJJQw5DkJEwUMBgVGhL+ZAgR9+QHALS32fQ31Xqf8CLyUzYVhYv8u6F17dyn0uYWnGfQgEsOCA91CkNAyXQkzFDkFysMvlSzVVItbPYkRpVOjTzQ75PWHhMJiV6EAg37BgQfN1CQvGPevPYH24tFYJr4OG+jgsa9jDOIUFegtmsLhk4GTEQi4SGbAQctew4F3W+UAWysoNuW7bZqGKs0pUH3QLC5UexSNCNo32pfZXbGPY17tEEIqbg1ioIuPNZg6sYwOTLcQYwiPoOWwEh7Co8IfWRTUsKiwiBMXLNsQLVR0WJ2DXbmHh7qmzSNcXqjEGLPS/KgQjtmBxqxK9no7CMh+8nv77x99eUX/87wgsF5s4TuNC+BOVprYXxvPbA6jr0rHtX5F7ER317875f6XQY/FYPBaLPBajPBajPBajPBajPBajPBajPBajPBajPBajPBajPBajXgBLTs9aS1qPXUuaz3/LW3vUpZXyJ52ejJbLSftIXg3Rmka5P+94FN0LPFR9sfhKm9f82MPjgk8mv1lcmqZ3vah1w47ml40d5c50dHo+XJ3dZI0nEeZqkOY0LqudsRXM82PpC6GefZgK8Zm9c3IlBH+0ZL9nfOZxfqfeo8eeiJtuGzuKQb/f1ufuGk+QXOuZPrJ4SWfV3oHtUfOvj2XawDIUs7EBy6UQs0KNp1Yanhyc3EyFmO5vbweiyVxiGVSj8IhM9+Kkd1s8UNuWSM+PZf1cWIovcdPGUyvbWIqnJouLLF3HcXK+4w8klVN5zIpBUr56iWW4WcfyStsDSt8wFtNjPNtYYhkkD9WufNl48iZMhY+yL1Mxnom94b3raTmNJVkIcWV75usBLNnM+tDyF8Fyt6l+k/HjKCxZVoxxIImkZe825qVVUykHaSy+SKIf6UYS/WbpvI7DYrqhci7zk1pPw2KqRBLLvNDuottyZQ7Vd7wv1QgbmkrLW+az2VzAI5WfFYslWkBHREslfj/bWE7Ebbm2vDeUsk2lhaXUuY3Ky2AZnlW6OArLzedCX9n+Fha5Y1aWn+/ljK7Z28mpnN2VnVsLy+2Xcxks1sdzvwiWx3QyGk0mo81RWJZ5Ib6/hWW5EqK8/vtwJbs63s0WUzGOIi03TaW1rCyFyPlKVLQtwzJc+vHCgMVaidZBKom2P0noaT0zlp/vci2W+7S+ZdwrnlVfvOHEiMU4St23zK0PpH8D0bKPR4XY/J+OpTBdMVukWfalZ0qitBy85S0FluSzNY1eHUvzo6J+f9a4/wSWvKoru3KQluXWuuf1rMISpENbGj0/luVOf14dt7CcisbHluVqWmuOuSSxTL8bBl/vxarV08aP23I689UNd5Llrh5bnDPG61sxLEdJ59NB4wPDS2EJ4kxPLssa9yLJmsm8zGrxA3lmLp5x8zuVctQ0vrm7HMf95p2P1eCNia7VKHFmbl3ey5eWrSJ8nN4LlmeWx2KUx2KUx2KUx2KUx2KUx2KUx2KUx2KUx2KUx2LUUVguNsb/R8c70I9jsOhffLw/7Y7A4uXl5eXl5eX1dvQnEMmM4MIxZ1UAAAAASUVORK5CYII=' />
        </div>
      </div>
    </div>
  );
};

export default ShopBrands;