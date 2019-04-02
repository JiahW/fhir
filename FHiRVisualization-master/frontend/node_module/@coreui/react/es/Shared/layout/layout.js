function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LayoutHelper = function () {
  function LayoutHelper() {
    _classCallCheck(this, LayoutHelper);
  }

  LayoutHelper.sidebarToggle = function sidebarToggle(toggle) {
    var minimize = arguments.length ? toggle : !document.body.classList.contains('sidebar-minimized');
    this.sidebarMinimize(minimize);
    this.brandMinimize(minimize);
    this.sidebarPSToggle(!minimize); /*remove PS on sidebar minimized*/
  };

  LayoutHelper.sidebarMinimize = function sidebarMinimize(force) {
    return document.body.classList.toggle('sidebar-minimized', force);
  };

  LayoutHelper.brandMinimize = function brandMinimize(force) {
    document.body.classList.toggle('brand-minimized', force);
  };

  //  sidebar perfect scrollbar


  LayoutHelper.sidebarPSToggle = function sidebarPSToggle(toggle) {
    var sidebar = document.querySelector('.sidebar-nav');
    if (sidebar) {
      if (toggle) {
        sidebar.classList.add('ps', 'ps-container', 'ps--active-y');
      } else {
        sidebar.classList.remove('ps', 'ps-container', 'ps--active-y');
      }
    }
  };

  return LayoutHelper;
}();

export default LayoutHelper;