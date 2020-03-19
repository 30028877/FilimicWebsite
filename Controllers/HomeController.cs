using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace filimic.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Map()
        {
            return View();
        }

        public ActionResult homev2()
        {
            return View();
        }

        public ActionResult PageNotFount()
        {
            return View();
        }
        public ActionResult BlogDetail()
        {
            return View();
        }
        public ActionResult BlogGrid()
        {
            return View();
        }
        public ActionResult BlogList()
        {
            return View();
        }
        public ActionResult CelebrityGrid()
        {
            return View();
        }

        public ActionResult CelebrityGrid2()
        {
            return View();
        }
        public ActionResult CelebrityList()
        {
            return View();
        }
        public ActionResult CelebritySingle()
        {
            return View();
        }
        public ActionResult ComingSoon()
        {
            return View();
        }
        public ActionResult Landing()
        {
            return View();
        }

        public ActionResult MovieGrid()
        {
            return View();
        }

        public ActionResult MovieGridFullWidth()
        {
            return View();
        }

        public ActionResult MovieList()
        {
            return View();
        }
        public ActionResult MovieSingle()
        {
            return View();
        }
        public ActionResult TVShows()
        {
            return View();
        }

        public ActionResult UserfavoriteGrid()
        {
            return View();
        }
        public ActionResult UserProfile()
        {
            return View();
        }
        public ActionResult UserRate()
        {
            return View();
        }

        public ActionResult TermAndCondition()
        {
            return View();
        }
        public ActionResult PrivacyPolicy()
        {
            return View();
        }
        public ActionResult SiteMap()
        {
            return View();
        }

        public ActionResult ShowTime()
        {
            return View();
        }
        public ActionResult Trailers()
        {
            return View();
        }
        public ActionResult ChangePassword()
        {
            return View();
        }
        public ActionResult ForgotPassword()
        {
            return View();
        }
    }
}