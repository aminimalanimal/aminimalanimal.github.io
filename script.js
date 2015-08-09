(function() {
  var generate_triangular_background;

  generate_triangular_background = function() {
    var $background, pattern, triangular_background_height, triangular_background_width, viewBox;
    triangular_background_height = $(document.body).outerHeight();
    triangular_background_width = $(document.body).outerWidth();
    pattern = Trianglify({
      cell_size: 75,
      height: triangular_background_height,
      variance: 1,
      width: triangular_background_width,
      x_colors: ['#23241f', '#f8f8f2', '#23241f', '#f8f8f2'],
      y_colors: ['#fd9720', '#66d9ef', '#e6db74']
    });
    document.body.appendChild(pattern.svg());
    $background = $('svg', document.body);
    viewBox = "0 0 " + triangular_background_width + " " + triangular_background_height;
    $background.removeAttr('height').attr({
      'aria-hidden': 'true',
      "class": 'triangular_background',
      width: '100%'
    });
    return $background[0].setAttribute('viewBox', viewBox);
  };

  generate_triangular_background();

  $(window).on('resize', function() {
    $('.triangular_background').remove();
    return generate_triangular_background();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9wYWdlcy9tYWluLmxpdGNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQztBQUFBLE1BQUEsOEJBQUE7O0FBQUEsRUFBQSw4QkFBQSxHQUFpQyxTQUFBLEdBQUE7QUFFaEMsUUFBQSx3RkFBQTtBQUFBLElBQUEsNEJBQUEsR0FBK0IsQ0FBQSxDQUFFLFFBQVEsQ0FBQyxJQUFYLENBQWdCLENBQUMsV0FBakIsQ0FBQSxDQUEvQixDQUFBO0FBQUEsSUFDQSwyQkFBQSxHQUE4QixDQUFBLENBQUUsUUFBUSxDQUFDLElBQVgsQ0FBZ0IsQ0FBQyxVQUFqQixDQUFBLENBRDlCLENBQUE7QUFBQSxJQUdBLE9BQUEsR0FBVSxVQUFBLENBQ1Q7QUFBQSxNQUFBLFNBQUEsRUFBVyxFQUFYO0FBQUEsTUFDQSxNQUFBLEVBQVEsNEJBRFI7QUFBQSxNQUVBLFFBQUEsRUFBVSxDQUZWO0FBQUEsTUFHQSxLQUFBLEVBQU8sMkJBSFA7QUFBQSxNQUlBLFFBQUEsRUFBVSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLENBSlY7QUFBQSxNQUtBLFFBQUEsRUFBVSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLENBTFY7S0FEUyxDQUhWLENBQUE7QUFBQSxJQVdBLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBZCxDQUEwQixPQUFPLENBQUMsR0FBUixDQUFBLENBQTFCLENBWEEsQ0FBQTtBQUFBLElBYUEsV0FBQSxHQUFjLENBQUEsQ0FBRSxLQUFGLEVBQVMsUUFBUSxDQUFDLElBQWxCLENBYmQsQ0FBQTtBQUFBLElBZUEsT0FBQSxHQUFVLE1BQUEsR0FBTywyQkFBUCxHQUFtQyxHQUFuQyxHQUFzQyw0QkFmaEQsQ0FBQTtBQUFBLElBaUJBLFdBQVcsQ0FBQyxVQUFaLENBQXVCLFFBQXZCLENBQWdDLENBQUMsSUFBakMsQ0FDQztBQUFBLE1BQUEsYUFBQSxFQUFlLE1BQWY7QUFBQSxNQUNBLE9BQUEsRUFBTyx1QkFEUDtBQUFBLE1BRUEsS0FBQSxFQUFPLE1BRlA7S0FERCxDQWpCQSxDQUFBO1dBdUJBLFdBQVksQ0FBQSxDQUFBLENBQUUsQ0FBQyxZQUFmLENBQTRCLFNBQTVCLEVBQXVDLE9BQXZDLEVBekJnQztFQUFBLENBQWpDLENBQUE7O0FBQUEsRUEyQkEsOEJBQUEsQ0FBQSxDQTNCQSxDQUFBOztBQUFBLEVBNkJBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxFQUFWLENBQWEsUUFBYixFQUF1QixTQUFBLEdBQUE7QUFDdEIsSUFBQSxDQUFBLENBQUUsd0JBQUYsQ0FBMkIsQ0FBQyxNQUE1QixDQUFBLENBQUEsQ0FBQTtXQUNBLDhCQUFBLENBQUEsRUFGc0I7RUFBQSxDQUF2QixDQTdCQSxDQUFBO0FBQUEiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIyBNYWluLmxpdGNvZmZlZVxuXG4jIyBUcmlhbmdsaWZ5XG5cbkdlbmVyYXRlcyBmdW4gYmFja2dyb3VuZHMuXG5cblx0Z2VuZXJhdGVfdHJpYW5ndWxhcl9iYWNrZ3JvdW5kID0gLT5cblxuXHRcdHRyaWFuZ3VsYXJfYmFja2dyb3VuZF9oZWlnaHQgPSAkKGRvY3VtZW50LmJvZHkpLm91dGVySGVpZ2h0KClcblx0XHR0cmlhbmd1bGFyX2JhY2tncm91bmRfd2lkdGggPSAkKGRvY3VtZW50LmJvZHkpLm91dGVyV2lkdGgoKVxuXG5cdFx0cGF0dGVybiA9IFRyaWFuZ2xpZnlcblx0XHRcdGNlbGxfc2l6ZTogNzVcblx0XHRcdGhlaWdodDogdHJpYW5ndWxhcl9iYWNrZ3JvdW5kX2hlaWdodFxuXHRcdFx0dmFyaWFuY2U6IDFcblx0XHRcdHdpZHRoOiB0cmlhbmd1bGFyX2JhY2tncm91bmRfd2lkdGhcblx0XHRcdHhfY29sb3JzOiBbJyMyMzI0MWYnLCAnI2Y4ZjhmMicsICcjMjMyNDFmJywgJyNmOGY4ZjInXVxuXHRcdFx0eV9jb2xvcnM6IFsnI2ZkOTcyMCcsICcjNjZkOWVmJywgJyNlNmRiNzQnXVxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYXR0ZXJuLnN2ZygpKVxuXG5cdFx0JGJhY2tncm91bmQgPSAkKCdzdmcnLCBkb2N1bWVudC5ib2R5KVxuXG5cdFx0dmlld0JveCA9IFwiMCAwICN7dHJpYW5ndWxhcl9iYWNrZ3JvdW5kX3dpZHRofSAje3RyaWFuZ3VsYXJfYmFja2dyb3VuZF9oZWlnaHR9XCJcblxuXHRcdCRiYWNrZ3JvdW5kLnJlbW92ZUF0dHIoJ2hlaWdodCcpLmF0dHJcblx0XHRcdCdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuXHRcdFx0Y2xhc3M6ICd0cmlhbmd1bGFyX2JhY2tncm91bmQnXG5cdFx0XHR3aWR0aDogJzEwMCUnXG5cblx0XHQjIGJlY2F1c2UgalF1ZXJ5J3Mgc3R1cGlkIGFuZCBkb2Vzbid0IGxpc3RlbiB0byBteSBjYW1lbGNhc2luZyBmb3IgYHZpZXdCb3hgLCB3ZSBoYXZlIHRvIHVzZSBuYXRpdmUgSmF2YVNjcmlwdDpcblx0XHQkYmFja2dyb3VuZFswXS5zZXRBdHRyaWJ1dGUgJ3ZpZXdCb3gnLCB2aWV3Qm94XG5cblx0Z2VuZXJhdGVfdHJpYW5ndWxhcl9iYWNrZ3JvdW5kKClcblxuXHQkKHdpbmRvdykub24gJ3Jlc2l6ZScsIC0+XG5cdFx0JCgnLnRyaWFuZ3VsYXJfYmFja2dyb3VuZCcpLnJlbW92ZSgpXG5cdFx0Z2VuZXJhdGVfdHJpYW5ndWxhcl9iYWNrZ3JvdW5kKCkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=