"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var BigNumber = _interopRequire(require("bignumber.js"));

var isString = _interopRequire(require("lodash/isString"));

var Keypair = require("./keypair").Keypair;

var StrKey = require("./strkey").StrKey;

var Account = exports.Account = (function () {
    /**
     * Create a new Account object.
     *
     * `Account` represents a single account in Stellar network and it's sequence number.
     * Account tracts the sequence number as it is used by {@link TransactionBuilder}.
     * See [Accounts](https://stellar.org/developers/learn/concepts/accounts.html) for more information about how
     * accounts work in Stellar.
     * @constructor
     * @param {string} accountId ID of the account (ex. `GB3KJPLFUYN5VL6R3GU3EGCGVCKFDSD7BEDX42HWG5BWFKB3KQGJJRMA`)
     * @param {string} sequence current sequence number of the account
     */

    function Account(accountId, sequence) {
        _classCallCheck(this, Account);

        if (!StrKey.isValidEd25519PublicKey(accountId)) {
            throw new Error("accountId is invalid");
        }
        if (!isString(sequence)) {
            throw new Error("sequence must be of type string");
        }
        this._accountId = accountId;
        this.sequence = new BigNumber(sequence);
    }

    _createClass(Account, {
        accountId: {

            /**
             * Returns Stellar account ID, ex. `GB3KJPLFUYN5VL6R3GU3EGCGVCKFDSD7BEDX42HWG5BWFKB3KQGJJRMA`
             * @returns {string}
             */

            value: function accountId() {
                return this._accountId;
            }
        },
        sequenceNumber: {

            /**
             * @returns {string}
             */

            value: function sequenceNumber() {
                return this.sequence.toString();
            }
        },
        incrementSequenceNumber: {

            /**
             * Increments sequence number in this object by one.
             */

            value: function incrementSequenceNumber() {
                this.sequence = this.sequence.add(1);
            }
        }
    });

    return Account;
})();