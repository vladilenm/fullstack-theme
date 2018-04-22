const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

M.FloatingActionButton.init($('.fixed-action-btn'))

const $tt = $('.tap-target')
const $modal = $('.modal')
const $ttp = $('.tooltipped')

if ($tt) {
  const tapTarget = M.TapTarget.init($tt)
  $('#dashboard-info').addEventListener('click', function() {
    tapTarget.open()
  })
}

if ($modal) {
  M.Modal.init($modal)
}

if ($('.datepicker')) {
  M.Datepicker.init($$('.datepicker'), {
    format: 'dd.mm.yyyy',
    showClearBtn: true
  })
}

const $filter = $('.js-filter')

if ($filter) {
  $filter.addEventListener('click', function() {
    $filter.classList.toggle('active')
    $('.js-filter-block').classList.toggle('hide')
  })
}

if ($ttp) {
  M.Tooltip.init($ttp)
}

