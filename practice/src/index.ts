import {GithubService} from "./service/github.service"
import { User } from "./domain/user";

var gv = new GithubService()
gv.getUserInfo("erafaelmanuel")

var user = new User("", "", 0, 0, [])