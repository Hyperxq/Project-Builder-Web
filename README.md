# What is commitlint

commitlint checks if your commit messages meet the conventional commit format.

In general, the pattern mostly looks like this:

**type(scope?):** subject #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")

Real world examples can look like this:

**chore:** run tests on travis ci

**fix(server):** send cors headers

**feat(blog):** add comment section

Common types according to commitlint-config-conventional (based on the Angular convention) can be:

* build
* chore
* ci
* docs
* feat
* fix
* perf
* refactor
* revert
* style
* test
