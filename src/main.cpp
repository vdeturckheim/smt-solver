#include <napi.h>
#include <z3++.h>

using namespace z3;

Napi::Value Solve(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  if (info.Length() < 1) {
    Napi::TypeError::New(env, "Wrong number of arguments")
        .ThrowAsJavaScriptException();
    return env.Null();
  }
  if (!info[0].IsString()) {
    Napi::TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
    return env.Null();
  }
  std::string query = info[0].ToString().Utf8Value();
  // TODO: use solver.from_string
  // check sat (return null if non)
  // check model

  context c;
  solver s(c);
  s.from_string(query.c_str());
  Z3_error_code err = c.check_error();
  if (err != Z3_OK) {
    Napi::TypeError::New(env, "Query error").ThrowAsJavaScriptException();
    return env.Null();
  }
  check_result res = s.check();
  if (res == unsat) {
    return Napi::String::New(env, "unsat");
  }
  if (res == unknown) {
    Napi::TypeError::New(env, "Unknown response").ThrowAsJavaScriptException();
    return env.Null();
  }
  model mod = s.get_model();
  return Napi::String::New(env, mod.to_string());
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "solve"),
              Napi::Function::New(env, Solve));
  return exports;
}

NODE_API_MODULE(hello, Init)