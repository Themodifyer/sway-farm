/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.35.0
  Forc version: 0.35.3
  Fuel-Core version: 0.17.3
*/

import { Interface, Contract } from "fuels";
import type { Provider, Account, AbstractAddress } from "fuels";
import type { ContractAbi, ContractAbiInterface } from "../ContractAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "[_; 10]",
      "components": [
        {
          "name": "__array_element",
          "type": 7,
          "typeArguments": [
            {
              "name": "",
              "type": 17,
              "typeArguments": null
            }
          ]
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "bool",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum FoodType",
      "components": [
        {
          "name": "tomatoes",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 15,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 16,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "enum InvalidError",
      "components": [
        {
          "name": "NotEnoughTokens",
          "type": 22,
          "typeArguments": null
        },
        {
          "name": "NotEnoughSeeds",
          "type": 22,
          "typeArguments": null
        },
        {
          "name": "IncorrectAssetId",
          "type": 16,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 8,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        8
      ]
    },
    {
      "typeId": 8,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "str[14]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "str[17]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "str[21]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "str[37]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "str[9]",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 15,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 2,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 16,
      "type": "struct ContractId",
      "components": [
        {
          "name": "value",
          "type": 2,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 17,
      "type": "struct Food",
      "components": [
        {
          "name": "name",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "time_planted",
          "type": 7,
          "typeArguments": [
            {
              "name": "",
              "type": 22,
              "typeArguments": null
            }
          ]
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 18,
      "type": "struct GardenVector",
      "components": [
        {
          "name": "inner",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 19,
      "type": "struct Player",
      "components": [
        {
          "name": "farming_skill",
          "type": 22,
          "typeArguments": null
        },
        {
          "name": "total_value_sold",
          "type": 22,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 20,
      "type": "struct RawVec",
      "components": [
        {
          "name": "ptr",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 22,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        8
      ]
    },
    {
      "typeId": 21,
      "type": "struct Vec",
      "components": [
        {
          "name": "buf",
          "type": 20,
          "typeArguments": [
            {
              "name": "",
              "type": 8,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "len",
          "type": 22,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        8
      ]
    },
    {
      "typeId": 22,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "food_type",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 22,
          "typeArguments": null
        }
      ],
      "name": "buy_seeds",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        },
        {
          "name": "payable",
          "arguments": []
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "food_type",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 22,
          "typeArguments": null
        }
      ],
      "name": "buy_seeds_free",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "index",
          "type": 22,
          "typeArguments": null
        }
      ],
      "name": "can_harvest",
      "output": {
        "name": "",
        "type": 3,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 5,
          "typeArguments": null
        }
      ],
      "name": "can_level_up",
      "output": {
        "name": "",
        "type": 3,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 5,
          "typeArguments": null
        }
      ],
      "name": "get_garden_vec",
      "output": {
        "name": "",
        "type": 18,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "item",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "get_item_amount",
      "output": {
        "name": "",
        "type": 22,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 5,
          "typeArguments": null
        }
      ],
      "name": "get_player",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 19,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "id",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "item",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "get_seed_amount",
      "output": {
        "name": "",
        "type": 22,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "index",
          "type": 22,
          "typeArguments": null
        }
      ],
      "name": "harvest",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "level_up",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "new_player",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "food_type",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "index",
          "type": 22,
          "typeArguments": null
        }
      ],
      "name": "plant_seed_at_index",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "food_type",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 22,
          "typeArguments": null
        },
        {
          "name": "indexes",
          "type": 21,
          "typeArguments": [
            {
              "name": "",
              "type": 22,
              "typeArguments": null
            }
          ]
        }
      ],
      "name": "plant_seeds",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "food_type",
          "type": 4,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 22,
          "typeArguments": null
        }
      ],
      "name": "sell_item",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 14,
        "typeArguments": null
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 11,
        "typeArguments": null
      }
    },
    {
      "logId": 4,
      "loggedType": {
        "name": "",
        "type": 10,
        "typeArguments": null
      }
    },
    {
      "logId": 5,
      "loggedType": {
        "name": "",
        "type": 12,
        "typeArguments": null
      }
    },
    {
      "logId": 6,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 7,
      "loggedType": {
        "name": "",
        "type": 13,
        "typeArguments": null
      }
    },
    {
      "logId": 8,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": 9,
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
}

export class ContractAbi__factory {
  static readonly abi = _abi
  static createInterface(): ContractAbiInterface {
    return new Interface(_abi) as unknown as ContractAbiInterface
  }
  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): ContractAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as ContractAbi
  }
}
